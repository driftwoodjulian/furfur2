from flask import Flask, request, jsonify
from flask_cors import CORS
from requester import howler
import requests

app = Flask(__name__)
CORS(app, origins='*')





#<<<<<<<<<<<<<<<<<<<<<<<<<<<1: forecast page
@app.route('/v1/city/forecast/<string:location>')
# what to do with option
def location_endpoint(location):
    # notice location is a variable declared in the url
    
    city= location
    print(city)
    #we have the city now we need to get the ip from the serverside
    # we need to make a python object since we need an ip api
    
    
    def api_fy():
        
        url= 'https://api.ipify.org?format=json'
        response= requests.get(url)
        print(">>>>>>>>requesting towards: " + url)
        json_data = response.json()
        print(json_data['ip'])
        return json_data['ip']
        
    
    ip=  api_fy()
    # now we have the server side ip I just need to compare it to the client side
    #but first I need to bring in the client Ip
    
    print(ip + "is the server side ip")
    
    
    
    mailer= howler(city, ip)
    result= mailer.positive()
    
    
    
    weather = {
        'cityip': '{}'.format(result[0]),
        'today': '{}'.format(result[1]),
        'day2': '{}'.format(result[2]),
        'day3': '{}'.format(result[3]),
        'day4': '{}'.format(result[4]),
        'day5': '{}'.format(result[5])
    }
    print(weather)
    
    
    return(weather)




















#<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<2: forecast front
@app.route('/v1/city', methods=['POST'])
def my_api_endpoint():
    data = request.get_json()
    #the info from the fetch is parsed as a json and stored in data
    city = data.get('city')
    ip =data.get('ip')
    
    mailer= howler(city, ip)
    result= mailer.positive()
    
    weather = {
        'cityip': '{}'.format(result[0]),
        'today': '{}'.format(result[1]),
        'day2': '{}'.format(result[2]),
        'day3': '{}'.format(result[3]),
        'day4': '{}'.format(result[4]),
        'day5': '{}'.format(result[5])
    }
    print(weather)
    return jsonify(weather)


#will add another part here in it will take an option
# another route without the option for it will use the ip only













#<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<3: server forecast ip

@app.route('/v1/city/locateIp', methods=['POST']) #this is like the previous rout only it is accesible via the client side interface html
# we need to extract the city and the ip which are sent from the front

# 

def rem_location_endpoint():
    data = request.get_json()
    #the info from the fetch is parsed as a json and stored in data
    city = data.get('city')
    ip =data.get('ip')
    
    print(city)
    #we have the city now we need to get the ip from the serverside
    # we need to make a python object since we need an ip api
    
    
    
    def api_fy():
        # and the way we get the serverside ip is this
        
        url= 'https://api.ipify.org?format=json'
        response= requests.get(url)
        print(">>>>>>>>requesting towards: " + url)
        json_data = response.json()
        print(json_data['ip'])
        return json_data['ip']
        
    
    ip2=  api_fy()
    # now we have the server side ip I just need to compare it to the client side
    #but first I need to bring in the client Ip
    
    print(ip2 + "is the server side ip")
    print(ip + ' this from the client side')
    
    if(ip == ip2):
        print("local access")
    else:
        print("remote access")
    

    def verification(ip, ip2):
        if(ip == ip2):
            return "local access"
            
        else:
            return "remote access"
            
            
    
    
    
    local= verification(ip, ip2)
    
    
    # here we need to ad a variation that gives out both ips
    
    mailer= howler(city, ip2)
    result= mailer.p_local_positive()
    
    
    
    
    
    weather = {
            'locality': '{}'.format(local),
            'cityip': '{}'.format(ip),
            'cityip2': '{}'.format(ip2),
            'today': '{}'.format(result[1]),
            'day2': '{}'.format(result[2]),
            'day3': '{}'.format(result[3]),
            'day4': '{}'.format(result[4]),
            'day5': '{}'.format(result[5])
        }
    print(weather)
        
        
    return(weather)

















@app.route('/v1/city', methods=['OPTIONS'])
def handle_options():
    response = jsonify()
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type')
    response.headers.add('Access-Control-Allow-Methods', 'POST')
    return response

if __name__ == '__main__':
    app.run(port=3000)