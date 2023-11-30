from ultralytics import YOLO
from dtrb.dtrb import DTRB

# plate_detector = YOLO("weigths/yolov8-detector/yolov8-s-license-plate-detector.pt")  # load a pretrained model YOLOV8
# plate_detector.predict("io/input/16_car.jpg",save=True,save_crop=True)

plate_rec = DTRB("weigths/dtrb-recoginzer/dtrb-None-VGG-BiLSTM-CTC-license-plate-recognizer.pth")   # load a pretrained model DTRB
plate_rec.predict("io/input_plates")