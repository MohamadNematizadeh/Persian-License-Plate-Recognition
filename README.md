# Persian License Plate Recognition 🚘
<img src = "https://skillicons.dev/icons?i=html,css,bootstrap,tensorflow,python,javascript">
Vehicle license plate pipeline using YOLOV8 and DTRB (deep text recognition criteria) 🚗

![screen shot](https://github.com/MohamadNematizadeh/my_website/blob/main/static/image/projket/License_Plate_PipeLine_UI.png?raw=true)
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
## How to run:
Run this command:
```
python main.py --input-image YOUR_IMAGE.jpg
```
Run this command:
```
python verification.py --input-image YOUR_IMAGE.jpg
```
Also you can chang threshold  using`--threshold`
