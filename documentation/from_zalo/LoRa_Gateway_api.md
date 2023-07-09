# LoRa Gateway API

## Request

- URL

  ````http
  http://api.vngalaxy.vn/api/uplink/
  ````

- Method: `POST`
- Headers:
  - Authorization:
    - Type: `Bearer Token`

    ```txt
    bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkZXZFVUkiOiJlNmY0Yjk1ZTc3N2JkYmRkIiwiYXBwSUQiOiI2IiwiaWF0IjoxNjg3MzM5ODYyfQ.7FZB7rF7rMBjLCnMBKtUKM-TgnEQfTZ5dNOo1ouRKdc
    ```

- Body :

  | Name            | type   | is mandatory | Description                        |
  |-----------------|--------|:------------:|------------------------------------|
  | limit           | number |      ❌       | the length of the response data    |
  | appID           | number |      ✅       | application identifier             |
  | devEUI          | number |      ✅       | end-device identifier              |
  | gatewayID       | string |      ❌       | gateway identifier                 |
  | time            | string |      ❌       | time the packet sent from gateway  |
  | rssi            | number |      ❌       | Received Signal Strength Indicator |
  | longitude       | number |      ❌       | location of the gateway            |
  | latitude        | number |      ❌       | location of the gateway            |
  | altitude        | number |      ❌       | location of the gateway            |
  | uplinkID        | string |      ❌       | uplink packet identifier           |
  | frequency       | number |      ❌       | the frequency of the signal        |
  | bandwidth       | number |      ❌       |                                    |
  | spreadingFactor | number |      ❌       |                                    |
  | codeRate        | string |      ❌       |                                    |
  | fCnt            | number |      ❌       | frame counter                      |
  | fPort           | number |      ❌       | port number                        |
  | data            | string |      ❌       | object JSON data decode            |

## Response

| Name            | type   | Description            |
|-----------------|--------|------------------------|
| err/code        | number | status of the response |
| msg             | string | message description    |
| data            | array  | data received          |