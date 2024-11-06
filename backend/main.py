import firebase_admin
from firebase_admin import credentials, firestore

cred = credentials.Certificate("./intertherapy-f5e69-firebase-adminsdk-dyjic-ef7ef12fac.json")
firebase_admin.initialize_app(cred)

db = firestore.client()

def add_user(data):
    doc_ref = db.collection("users").add(data)
    print("User added with ID:", doc_ref[1].id)  # Atualizado para garantir que o ID seja exibido corretamente

def get_users():
    users = db.collection("users").stream()
    for user in users:
        print(f"{user.id} => {user.to_dict()}")

# Adiciona um usuário de teste e lê os dados
add_user({
    "first": "Ada",
    "last": "Lovelace",
    "born": 1815
})

get_users()
