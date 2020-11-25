import 'package:flutter/material.dart';
import 'package:mobile_app/widgets/cards/settings-option.card.dart';

class AccountScreen extends StatefulWidget {
  @override
  _AccountScreen createState() => _AccountScreen();
}

class _AccountScreen extends State {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SingleChildScrollView(
        child: Container(
          margin: EdgeInsets.symmetric(
            horizontal: MediaQuery.of(context).size.height * .01,
          ),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.start,
            children: [
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceAround,
                children: [
                  Align(
                    alignment: Alignment.centerLeft,
                    child: Text(
                      'Sam Davis',
                      style: TextStyle(
                        color: Colors.white,
                        fontSize: 28,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                  ),
                  Container(
                    height: MediaQuery.of(context).size.height * .13,
                    width: MediaQuery.of(context).size.height * .13,
                    margin: EdgeInsets.only(
                      top: MediaQuery.of(context).size.height * .07,
                      bottom: MediaQuery.of(context).size.height * .01,
                    ),
                    decoration: new BoxDecoration(
                      shape: BoxShape.circle,
                      image: DecorationImage(
                        fit: BoxFit.fill,
                        image: NetworkImage(
                          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhips.hearstapps.com%2Fhbz.h-cdn.co%2Fassets%2F16%2F43%2Fhbz-dark-blonde-hair-magdalena-frackowiak.jpg%3Fcrop%3D1.0xw%3A1xh%3Bcenter%2Ctop%26resize%3D768%3A*&f=1&nofb=1',
                        ),
                      ),
                    ),
                  ),
                ],
              ),
              SizedBox(
                height: 10,
              ),
              Align(
                alignment: Alignment.centerLeft,
                child: Text(
                  "Profile",
                  style: TextStyle(
                    color: Colors.white,
                    fontSize: 23,
                    fontWeight: FontWeight.bold,
                  ),
                ),
              ),
              SizedBox(
                height: 10,
              ),
              SettingsOptionCard(title: "Username"),
              SettingsOptionCard(title: "Physical & Activity"),
              SettingsOptionCard(title: "MyTrainer"),
              SizedBox(
                height: 20,
              ),
              Align(
                alignment: Alignment.centerLeft,
                child: Text(
                  "Account",
                  style: TextStyle(
                    color: Colors.white,
                    fontSize: 23,
                    fontWeight: FontWeight.bold,
                  ),
                ),
              ),
              SizedBox(
                height: 10,
              ),
              SettingsOptionCard(title: "Email"),
              SettingsOptionCard(title: "Phone"),
              SettingsOptionCard(title: "Subscription"),
              SizedBox(
                height: 20,
              ),
              Align(
                alignment: Alignment.centerLeft,
                child: Text(
                  "Privacy & Security",
                  style: TextStyle(
                    color: Colors.white,
                    fontSize: 23,
                    fontWeight: FontWeight.bold,
                  ),
                ),
              ),
              SizedBox(
                height: 10,
              ),
              SettingsOptionCard(title: "Password"),
              SettingsOptionCard(title: "Privacy & Data"),
              SettingsOptionCard(
                title: "Logout",
                onTap: () {
                  displayModalBottomSheet(context);
                },
              ),
              SizedBox(
                height: 30,
              ),
              Center(
                child: InkWell(
                  child: new Text(
                    'Delete Account',
                    style: TextStyle(color: Colors.white, fontSize: 20),
                  ),
                  onTap: () {
                    displayDeleteAccountBottomSheet(context);
                  },
                ),
              ),
              SizedBox(
                height: 100,
              ),
            ],
          ),
        ),
      ),
    );
  }

  void displayModalBottomSheet(context) {
    showModalBottomSheet(
        backgroundColor: Color(0xff22272c),
        context: context,
        builder: (BuildContext bc) {
          return Container(
            child: new Wrap(
              spacing: 5.0,
              children: <Widget>[
                Column(
                  children: [
                    SizedBox(height: 20),
                    Text(
                      "Log Out?",
                      style: TextStyle(
                        fontSize: 23,
                        color: Colors.white,
                      ),
                    ),
                    SizedBox(height: 30),
                    Text(
                      "Are you sure? You will not be able to track activity or macros if you’re logged out.",
                      style: TextStyle(
                        color: Colors.white,
                      ),
                    ),
                  ],
                ),
                SizedBox(height: 30),
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceAround,
                  children: [
                    FlatButton(
                      color: Color(0xff99755A),
                      onPressed: () {},
                      child: Text(
                        "Log Out",
                        style: TextStyle(
                          color: Colors.white,
                          fontSize: 26,
                        ),
                      ),
                    ),
                    FlatButton(
                      onPressed: () {},
                      child: Text(
                        "Cancel",
                        style: TextStyle(
                          color: Color(0xff99755A),
                          fontSize: 26,
                        ),
                      ),
                    )
                  ],
                ),
                SizedBox(height: 20),
              ],
            ),
          );
        });
  }

  void displayDeleteAccountBottomSheet(context) {
    showModalBottomSheet(
        backgroundColor: Color(0xff22272c),
        context: context,
        builder: (BuildContext bc) {
          return Container(
            child: new Wrap(
              spacing: 5.0,
              children: <Widget>[
                Column(
                  children: [
                    SizedBox(height: 20),
                    Text(
                      "Delete Account?",
                      style: TextStyle(
                        fontSize: 23,
                        color: Colors.white,
                      ),
                    ),
                    SizedBox(height: 30),
                  ],
                ),
                SizedBox(height: 30),
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceAround,
                  children: [
                    FlatButton(
                      color: Color(0xff99755A),
                      onPressed: () {},
                      child: Text(
                        "Delete",
                        style: TextStyle(
                          color: Colors.white,
                          fontSize: 26,
                        ),
                      ),
                    ),
                    FlatButton(
                      onPressed: () {},
                      child: Text(
                        "Cancel",
                        style: TextStyle(
                          color: Color(0xff99755A),
                          fontSize: 26,
                        ),
                      ),
                    )
                  ],
                ),
                SizedBox(height: 40),
              ],
            ),
          );
        });
  }
}
