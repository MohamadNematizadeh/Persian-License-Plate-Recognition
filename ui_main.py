import sys
import os
import time

from PySide6.QtWidgets import QApplication, QGridLayout, QLabel, QProgressBar, QTableWidgetItem, QMainWindow, QFileDialog
from PySide6.QtUiTools import QUiLoader
from PySide6.QtCore import QThread, Qt, QLine
from PySide6.QtGui import QIcon, QPixmap, QImage
from PySide6 import QtGui
import cv2
from PIL.ImageQt import ImageQt
from PIL import Image
from deep_text_recognition_benchmark.dtrb_ui import DTRB

def convert_image(cv_img):
    cv_img = cv2.cvtColor(cv_img, cv2.COLOR_BGR2RGB)
    height, width, channel = cv_img.shape
    bytesPerLine = 3 * width
    qImg = QImage(cv_img.data, width, height, bytesPerLine, QImage.Format_RGB888)
    return QPixmap.fromImage(qImg)

class Main(QMainWindow):
    def __init__(self):
        super(Main, self).__init__()
        loader = QUiLoader()
        self.ui = loader.load('ui/mainwindow.ui')
        self.ui.show()
        self.plate_recognizer = DTRB("weigths/dtrb-recoginzer/dtrb-None-VGG-BiLSTM-CTC-license-plate-recognizer.pth")
        self.ui.btn_browse.clicked.connect(self.main)
        self.plate_recognizer.signalShowPreview.connect(self.ShowPreview)
        self.plate_recognizer.signalShowPlate.connect(self.ShowPlate)


    def main(self):
        self.input_file_path = QFileDialog.getOpenFileName(self, 'Select file', dir='./input', options=QFileDialog.DontUseNativeDialog)[0]
        self.ui.tb_path.setText(self.input_file_path)
        self.plate_recognizer.setInput(self.input_file_path)  
        a= self.plate_recognizer.run()  
        self.ui.textBrowser.setText(a) 

    def ShowPreview(self, image):
        pixmap = convert_image(image)
        self.ui.lbl_preview.setPixmap(pixmap)

    def ShowPlate(self, plate):
        self.ui.textBrowser.insertRow(self.ui.textBrowser.rowCount())
        index_last_row = self.ui.textBrowser.rowCount() - 1

        pixmap = convert_image(plate.image)
        image_label = QLabel()
        image_label.setPixmap(pixmap)
        image_label.setScaledContents(True)
        self.ui.textBrowser.setCellWidget(index_last_row, 1, image_label)
        self.ui.textBrowser.resizeRowsToContents()
        
if __name__ == "__main__":
    app = QApplication(sys.argv)
    widget = Main()
    sys.exit(app.exec())        