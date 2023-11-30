# Persian License Plate Recognition 🚘
Vehicle license plate recognition using   
 yolov8 and DTRB library 🚗🚘,
 # **resalt**
| resalt YOLO |  resalt DTRB	     | 
| :---   |   :---:   | 
| 
![screen shot](io\input_plates\16_car.jpg)    |  92j28612   |

# Experiments
| Dataset |  Percentage rate | 
| :---   |   :---:   | 
|Train yolov8  |  0.7219  | 
|Val yolov8  |    1.118    |
|Train DTRB  | 73.918 | 
|test DTRB  |   3.998   |

 
# Hohw to ran
### Install
```
pip install -r requirements.txt
```
Download the  [dataset and weights DTRB](https://drive.google.com/drive/folders/1hTuK4nj27cyAGaRL3ZqOqbO8gU_9IJCK) from link below

Download the   [weights YOLOV8](https://drive.google.com/drive/folders/1-iCOXis3LvVwNnXZyav-eMpYQgqzL0--)
 from link below

## Inference:
```
python3 main.py
```
# plt & matrix yolov8
| |  	     | 
| :---   |   :---:   | 
| ![screen shot](https://github.com/MohamadNematizadeh/Persian-License-Plate-Recognition/blob/main/Plt_matrix/F1_curve.png?raw=true)    |  ![screen shot](https://github.com/MohamadNematizadeh/Persian-License-Plate-Recognition/blob/main/Plt_matrix/PR_curve.png?raw=true)  |
| ![screen shot](https://github.com/MohamadNematizadeh/Persian-License-Plate-Recognition/blob/main/Plt_matrix/P_curve.png?raw=true)    |  ![screen shot](https://github.com/MohamadNematizadeh/Persian-License-Plate-Recognition/blob/main/Plt_matrix/R_curve.png?raw=true)  | 
| ![screen shot](https://github.com/MohamadNematizadeh/Persian-License-Plate-Recognition/blob/main/Plt_matrix/confusion_matrix_normalized.png?raw=true)    |  ![screen shot](https://github.com/MohamadNematizadeh/Persian-License-Plate-Recognition/blob/main/Plt_matrix/labels.jpg?raw=true)  | 
| ![screen shot](https://github.com/MohamadNematizadeh/Persian-License-Plate-Recognition/blob/main/Plt_matrix/labels_correlogram.jpg?raw=true)    |  ![screen shot](https://github.com/MohamadNematizadeh/Persian-License-Plate-Recognition/blob/main/results.png?raw=true)  |



