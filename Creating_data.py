import sqlite3 
from difflib import SequenceMatcher

class Database:
    def __init__(self):
        self.con = sqlite3.connect('db/license_plate_recognition.db')
        self.cursor = self.con.cursor()

    def get_Plake_text(self , text_plake_labl):
        self.cursor.execute(f"SELECT * FROM Plake WHERE text = '{text_plake_labl}'")
        plak = self.cursor.fetchone()
        return plak
