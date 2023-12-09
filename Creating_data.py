import sqlite3 

class Database:
    def __init__(self):
        self.con = sqlite3.connect('db/license_plate_recognition.db')
        self.cursor = self.con.cursor()

    def get_Plake_text(self):
        query="SELECT * FROM Plake"
        result=self.cursor.execute(query)
        plates=result.fetchall()
        return plates
