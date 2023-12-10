import sqlite3 
from difflib import SequenceMatcher

class Database:
    def __init__(self):
        self.con = sqlite3.connect('database/license_plate_recognition.db')
        self.cursor = self.con.cursor()

    def get_Plake_text(self):
        query="SELECT * FROM Plake"
        result=self.cursor.execute(query)
        plates=result.fetchall()
        return plates
