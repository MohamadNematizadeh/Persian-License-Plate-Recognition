import cv2
from ultralytics import YOLO
from deep_text_recognition_benchmark.dtrb import DTRB

plate_recognizer = DTRB("weigths/dtrb-recoginzer/dtrb-None-VGG-BiLSTM-CTC-license-plate-recognizer.pth")   # load a pretrained model DTRB
plate_recognizer.predict("io/input")
