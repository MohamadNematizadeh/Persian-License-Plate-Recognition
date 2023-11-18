# -*- coding: utf-8 -*-
"""YOLO.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1OPpVK3-zSqULBgswmvJQ10O4QyX2Djm8
"""

!pip install ultralytics

from ultralytics import YOLO

model = YOLO("yolov8x.pt")

new_model = YOLO("/content/drive/MyDrive/Persian_License_Plate-Recognition/runs/detect/train/weights/best.pt")
result_cv2 = cv2.imread("/content/drive/MyDrive/Persian_License_Plate-Recognition/datasets/images/validation/49_police.jpg")
result_car = new_model(result_cv2,save=True,save_crop=True)
import cv2
import matplotlib.pyplot as plt
new_model = YOLO("/content/drive/MyDrive/Persian_License_Plate-Recognition/weights/best.pt")
result_cv2 = cv2.imread("/content/test.webp")

result_car = new_model(result_cv2,save=True)

result = cv2.imread("/content/runs/detect/predict10/image0.jpg")
result = cv2.cvtColor(result, cv2.COLOR_BGR2RGB)
plt.imshow(result)
plt.show()
