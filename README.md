# Persian License Plate Recognition 🚘
# License Plate PipeLine
Vehicle license plate pipeline using YOLOV8 and DTRB (deep text recognition criteria) 🚗

![screen shot](https://github.com/MohamadNematizadeh/Persian-License-Plate-Recognition/raw/main/License_Plate_PipeLine_UI.png?raw=true)

------
# Experiments
| Model |  loss    |   accuracy  |
| :---   | :---:   |   :---:      |
| yolov8  |  1.118 |   0.7219     |
| DTRB  | 3.998    |     73.918   |

 
# How to Install
Run this command:
```
pip install -r requirements.txt
```
Download [dataset](https://drive.google.com/drive/folders/1MR0LYsC9TAAznmS0QLGaTpkb8NU7MKve
)

Download pre-trained [weights](https://drive.google.com/drive/folders/1qZXPQfkU9xZr67AtYxdzHM4RxyukYJ-D)
## !!! and put them to db and weights folder.

-------
## How to run:
----
Run this command:
```
python main.py --input-image YOUR_IMAGE.jpg
```
Also you can chang threshold  using`--threshold`
