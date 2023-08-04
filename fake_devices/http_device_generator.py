#Générer 9 étages consituté de 4 salles chacun: f1_r1 ou f9_r4
# Ouvrir un fichier en mode écriture
files = ["smart-building.things","smart-building.items"]
for file in files:
    for floor in range(1,10):
        for room in range(1,5):
            location = "f"+str(floor)+"_r"+str(room)
            path = "/f"+str(floor)+"/r"+str(room)
            if file == "smart-building.things":
                content = """Thing http:url:f1_r1 "f1_r1" [
   baseURL="http://apps.vngalaxy.vn:5000",
    stateMethod="GET",
    refresh=30
] {
    Channels:
        Type number : ac_f1_r1_consumption_channel "ac_f1_r1_consumption_channel" [ stateExtension="/f1/r1/ac", stateTransformation="JSONPATH:$.consumption" ]
        Type number : ac_f1_r1_temperature_channel "ac_f1_r1_temperature_channel" [ stateExtension="/f1/r1/ac", stateTransformation="JSONPATH:$.temperature" ]
        Type number : ac_f1_r1_state_channel "ac_f1_r1_state_channel" [ stateExtension="/f1/r1/ac", stateTransformation="JSONPATH:$.state" ]
        Type number : light_f1_r1_consumption_channel "lights_f1_r1_consumption_channel" [ stateExtension="/f1/r1/lights", stateTransformation="JSONPATH:$.consumption" ]
        Type number : light_f1_r1_state_channel "light_f1_r1_state_channel" [ stateExtension="/f1/r1/lights", stateTransformation="JSONPATH:$.state" ]

}
"""
            else:
                content = """Number ac_f1_r1_consumption "ac_f1_r1_consumption" { channel="http:url:f1_r1:ac_f1_r1_consumption_channel", persistence="influxdb" }
Number ac_f1_r1_temperature "ac_f1_r1_temperature" { channel="http:url:f1_r1:ac_f1_r1_temperature_channel", persistence="influxdb" }
Number ac_f1_r1_state "ac_f1_r1_state" { channel="http:url:f1_r1:ac_f1_r1_state_channel", persistence="influxdb" }
Number lights_f1_r1_consumption "lights_f1_r1_consumption" { channel="http:url:f1_r1:light_f1_r1_consumption_channel", persistence="influxdb" }
Number lights_f1_r1_state "lights_f1_r1_state" { channel="http:url:f1_r1:light_f1_r1_state_channel", persistence="influxdb" }

"""         
            content = content.replace("f1_r1", location).replace("/f1/r1", path)
            print(len(content))
            with open("test/"+file, 'a', encoding='utf-8') as fichier:
                # Écrire le contenu dans le fichier
                fichier.write(content)
