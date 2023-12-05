import pandas as pd

datos = pd.read_csv('ponencias.csv', encoding='utf-8')

json_output = datos.to_json(orient='records', force_ascii=False, default_handler=str, lines=True)

archivo_json = 'ponencias.json'
with open(archivo_json, 'w') as file:
    file.write(json_output)