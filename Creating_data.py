import sqlite3 
class Database:
    def __init__(self):
        self.con = sqlite3.connect('db/license_plate_recognition.db')
        self.cursor = self.con.cursor()

    def get_Plake_text(self , text_plake_labl):
        self.query = f"SELECT * FROM Plake WHERE Plake_text = '{text_plake_labl}'"
        result = self.cursor.execute(self.query)
        self.plake_text =  result.fetchall()
        return self.plake_text
