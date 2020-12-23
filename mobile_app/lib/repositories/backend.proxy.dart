import 'dart:io';
import 'package:http/http.dart' as http;
import 'dart:convert' as convert;

class BackendProxy {
  static String get localhost {
    if (Platform.isAndroid) return 'http://10.0.2.2:3000/api';

    return 'http://localhost:3000/api';
  }

  static Future<dynamic> get(String path) async {
    http.Response response;

    try {
      response = await http.get(localhost + path);
    } catch (exception) {
      throw new HttpException("message");
    }

    dynamic jsonResponse = convert.jsonDecode(response.body);

    return jsonResponse;
  }

  static Future<dynamic> post(String path, body) async {
    http.Response response;

    try {
      response = await http.post(localhost + path, body: body);
    } catch (exception) {
      throw new HttpException(exception);
    }

    dynamic jsonResponse = convert.jsonDecode(response.body);

    // if (jsonResponse.statusCode != null && jsonResponse.statusCode >= 400)
    //   throw new HttpException('Request Error: ${jsonResponse.statusCode}');

    return jsonResponse;
  }
}
