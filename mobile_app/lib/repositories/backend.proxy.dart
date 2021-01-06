import 'dart:io';
import 'package:http/http.dart' as http;
import 'dart:convert' as convert;

class BackendProxy {
  static Map<String, String> headers = {
    "Authorization":
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJmaXJzdG5hbWUiOiJBZG1pbiIsImxhc3RuYW1lIjoiRml0IiwiZW1haWwiOiJhZG1pbkBmaXQuY29tIiwiY3JlYXRlVGltZSI6IjIwMjEtMDEtMDNUMDQ6NDQ6MjQuMTE1WiIsInJvbGUiOiJTVVBFUiBBRE1JTiIsIm9yZ2FuaXphdGlvbiI6bnVsbH0sImlhdCI6MTYwOTcxNzM3M30.EZw0p8umcu3IQbJ1ttX02xpCZI78OdtTCPq58dlGjBU"
  };

  static String get localhost {
    if (Platform.isAndroid) return 'http://10.0.2.2:3000/api';

    return 'http://localhost:3000/api';
  }

  static String get remoteHost {
    return 'http://66.42.110.119:3000/api';
  }

  static Future<dynamic> get(String path) async {
    return handleRequest(http.get(
      remoteHost + path,
      headers: headers,
    ));
  }

  static Future<dynamic> post(String path, body) async {
    return handleRequest(http.post(
      remoteHost + path,
      body: body,
      headers: headers,
    ));
  }

  static handleRequest(Future<http.Response> req) async {
    http.Response response;

    try {
      response = await req;
    } catch (exception) {
      print(exception);
      throw new Exception("exception");
    }

    dynamic jsonResponse = convert.jsonDecode(response.body);

    return jsonResponse;
  }
}
