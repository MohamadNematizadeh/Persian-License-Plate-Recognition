# Persian License Plate Recognition 🚘
Vehicle license plate recognition using   
 yolov8 and DTRB library 🚗🚘,
 # **result**
| result YOLO |  result DTRB	     | 
| :---   |   :---:   | 
| ![screen shot](https://github.com/MohamadNematizadeh/Persian-License-Plate-Recognition/blob/main/io/input_plates/16_car.jpg?raw=true)    |  92j28612   |


# Experiments
| Dataset |  Percentage rate | 
| :---   |   :---:   | 
|Train yolov8  |  0.7219  | 
|Val yolov8  |    1.118    |
|Train DTRB  | 73.918 | 
|test DTRB  |   3.998   |

 
# How to run
### Install
```
pip install -r requirements.txt
```
Download the  [dataset and weights DTRB](https://drive.google.com/drive/folders/1hTuK4nj27cyAGaRL3ZqOqbO8gU_9IJCK) from link

Download the   [weights YOLOV8](https://drive.google.com/drive/folders/1-iCOXis3LvVwNnXZyav-eMpYQgqzL0--)
 from link 

## Inference:
```
python3 main.py
```
# plt & matrix yolov8
| |  	     | 
| :---   |   :---:   | 
| ![screen shot](https://github.com/MohamadNematizadeh/Persian-License-Plate-Recognition/blob/main/matrix/F1_curve.png?raw=true)    |  ![screen shot](https://github.com/MohamadNematizadeh/Persian-License-Plate-Recognition/blob/main/matrix/confusion_matrix_normalized.png?raw=true)  |  ![screen shot](https://github.com/MohamadNematizadeh/Persian-License-Plate-Recognition/blob/main/matrix/labels_correlogram.jpg?raw=true)  |



