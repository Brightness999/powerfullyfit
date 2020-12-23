import 'package:flutter/material.dart';
import 'package:mobile_app/screens/auth/login/login_ui.dart';
import 'package:mobile_app/theme/colors.dart';
import 'package:mobile_app/widgets/cards/settings-option.card.dart';

class AccountScreen extends StatefulWidget {
  @override
  _AccountScreen createState() => _AccountScreen();
}

class _AccountScreen extends State {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(),
      body: SingleChildScrollView(
        child: Container(
          margin: EdgeInsets.symmetric(
            horizontal: MediaQuery.of(context).size.height * .02,
          ),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.start,
            children: [
              Container(
                margin: EdgeInsets.only(
                  bottom: MediaQuery.of(context).size.height * .01,
                ),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  crossAxisAlignment: CrossAxisAlignment.center,
                  children: [
                    Flexible(
                      child: Container(
                        width: MediaQuery.of(context).size.width * .6,
                        child: Text(
                          "Sam Davis",
                          style: TextStyle(
                            color: Colors.white,
                            fontSize: MediaQuery.of(context).size.width * .09,
                            fontWeight: FontWeight.bold,
                          ),
                        ),
                      ),
                    ),
                    Container(
                      height: MediaQuery.of(context).size.height * .13,
                      width: MediaQuery.of(context).size.height * .13,
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
              SettingsOptionCard(child: Text("Username")),
              SettingsOptionCard(child: Text("Physical & Activity")),
              SettingsOptionCard(child: Text("MyTrainer")),
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
              SettingsOptionCard(child: Text("Email")),
              SettingsOptionCard(child: Text("Phone")),
              SettingsOptionCard(child: Text("Subscription")),
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
              SettingsOptionCard(child: Text("Password")),
              SettingsOptionCard(child: Text("Privacy & Data")),
              SettingsOptionCard(
                child: Text("Logout"),
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
                    style: TextStyle(
                      color: Colors.redAccent,
                      fontSize: 20,
                      decoration: TextDecoration.underline,
                    ),
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
      backgroundColor: darkGrey,
      context: context,
      builder: (BuildContext bc) {
        return Container(
          child: new Wrap(
            spacing: 5.0,
            runSpacing: 20.0,
            children: <Widget>[
              Column(
                crossAxisAlignment: CrossAxisAlignment.center,
                children: [
                  SizedBox(height: 20),
                  Text(
                    "Log Out?",
                    style: TextStyle(
                      fontSize: 23,
                      color: Colors.white,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                  SizedBox(height: 30),
                  Padding(
                    padding: EdgeInsets.symmetric(
                      horizontal: 15,
                    ),
                    child: Text(
                      "Are you sure? You will not be able to track activity or macros if you’re logged out.",
                      style: TextStyle(
                        color: Colors.white,
                      ),
                    ),
                  )
                ],
              ),
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceAround,
                children: [
                  FlatButton(
                    onPressed: () {
                      Navigator.pushAndRemoveUntil(context,
                          MaterialPageRoute(builder: (BuildContext context) {
                        return LoginScreen();
                      }), (route) => false);
                    },
                    child: Container(
                      width: MediaQuery.of(context).size.width * .42,
                      padding: EdgeInsets.symmetric(
                        vertical: 5,
                      ),
                      decoration: BoxDecoration(
                        color: lightBrown,
                        borderRadius: BorderRadius.all(
                          Radius.circular(100),
                        ),
                        border: Border.all(
                          color: lightBrown,
                          width: 2,
                        ),
                      ),
                      child: Center(
                        child: Text(
                          "Log Out",
                          style: TextStyle(
                            color: Colors.white,
                            fontSize: 26,
                          ),
                        ),
                      ),
                    ),
                  ),
                  FlatButton(
                    onPressed: () {
                      Navigator.pop(context);
                    },
                    child: Container(
                      width: MediaQuery.of(context).size.width * .42,
                      padding: EdgeInsets.symmetric(
                        vertical: 5,
                      ),
                      decoration: BoxDecoration(
                        border: Border.all(
                          color: lightBrown,
                          width: 2,
                        ),
                        borderRadius: BorderRadius.all(
                          Radius.circular(100),
                        ),
                      ),
                      child: Center(
                        child: Text(
                          "Cancel",
                          style: TextStyle(
                            color: Colors.white,
                            fontSize: 26,
                          ),
                        ),
                      ),
                    ),
                  )
                ],
              ),
              SizedBox(height: 20),
            ],
          ),
        );
      },
    );
  }

  void displayDeleteAccountBottomSheet(context) {
    showModalBottomSheet(
      backgroundColor: darkGrey,
      context: context,
      builder: (BuildContext bc) {
        return Container(
          child: new Wrap(
            alignment: WrapAlignment.center,
            spacing: 5.0,
            runSpacing: 20.0,
            children: <Widget>[
              Column(
                crossAxisAlignment: CrossAxisAlignment.center,
                mainAxisSize: MainAxisSize.max,
                children: [
                  SizedBox(height: 20),
                  Text(
                    "Delete Account?",
                    style: TextStyle(
                      fontSize: 23,
                      color: Colors.white,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                  SizedBox(
                    height: 30,
                  ),
                ],
              ),
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceAround,
                children: [
                  FlatButton(
                    onPressed: () {},
                    child: Container(
                      width: MediaQuery.of(context).size.width * .42,
                      padding: EdgeInsets.symmetric(
                        vertical: 5,
                      ),
                      decoration: BoxDecoration(
                        color: lightBrown,
                        borderRadius: BorderRadius.all(
                          Radius.circular(100),
                        ),
                        border: Border.all(
                          color: lightBrown,
                          width: 2,
                        ),
                      ),
                      child: Center(
                        child: Text(
                          "Delete",
                          style: TextStyle(
                            color: Colors.white,
                            fontSize: 26,
                          ),
                        ),
                      ),
                    ),
                  ),
                  FlatButton(
                    onPressed: () {
                      Navigator.pop(context);
                    },
                    child: Container(
                      width: MediaQuery.of(context).size.width * .42,
                      padding: EdgeInsets.symmetric(
                        // horizontal: MediaQuery.of(context).size.width * .12,
                        vertical: 5,
                      ),
                      decoration: BoxDecoration(
                        border: Border.all(
                          color: lightBrown,
                          width: 2,
                        ),
                        borderRadius: BorderRadius.all(
                          Radius.circular(100),
                        ),
                      ),
                      child: Center(
                        child: Text(
                          "Cancel",
                          style: TextStyle(
                            color: Colors.white,
                            fontSize: 26,
                          ),
                        ),
                      ),
                    ),
                  )
                ],
              ),
              SizedBox(height: 20),
            ],
          ),
        );
      },
    );
  }
}
