import 'package:adv_fab/adv_fab.dart';
import 'package:flutter/material.dart';
import 'package:mobile_app/screens/auth/login/login_ui.dart';
import 'package:mobile_app/screens/community-board/board/board_ui.dart';
import 'package:mobile_app/screens/education/education/education_ui.dart';
import 'package:mobile_app/screens/summary/summary_screen.ui.dart';
import 'package:mobile_app/screens/home/home_screen.bloc.dart';
import 'package:mobile_app/screens/workout/workout/workout_ui.dart';
import 'package:mobile_app/widgets/menu/menu.dart';

class AccountScreen extends StatefulWidget {
  @override
  _AccountScreen createState() => _AccountScreen();
}

class _AccountScreen extends State {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SingleChildScrollView(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.start,
          children: [
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceAround,
              children: [
                Text(
                  'Sam Davis',
                  style: TextStyle(
                    color: Colors.white,
                    fontSize: 28,
                    fontWeight: FontWeight.bold,
                  ),
                ),
                Container(
                  height: MediaQuery.of(context).size.height * .25,
                  width: MediaQuery.of(context).size.width * .25,
                  decoration: new BoxDecoration(
                      shape: BoxShape.circle,
                      image: DecorationImage(
                        fit: BoxFit.fill,
                        image: NetworkImage(
                          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhips.hearstapps.com%2Fhbz.h-cdn.co%2Fassets%2F16%2F43%2Fhbz-dark-blonde-hair-magdalena-frackowiak.jpg%3Fcrop%3D1.0xw%3A1xh%3Bcenter%2Ctop%26resize%3D768%3A*&f=1&nofb=1',
                        ),
                      )),
                ),
              ],
            ),
            Text(
              "Profile",
              style: TextStyle(
                color: Colors.white,
                fontSize: 23,
                fontWeight: FontWeight.bold,
              ),
            ),
            Container(
              margin: EdgeInsets.symmetric(horizontal: 10.0, vertical: 5.0),
              padding: EdgeInsets.all(10),
              decoration: BoxDecoration(
                color: Color(0xff22272c),
                borderRadius: BorderRadius.all(
                  Radius.circular(15),
                ),
              ),
              child: ListTile(
                tileColor: Color(0xff22272c),
                title: Text(
                  'Username',
                  style: TextStyle(
                    color: Colors.white,
                  ),
                ),
              ),
            ),
            Container(
              margin: EdgeInsets.symmetric(horizontal: 10.0, vertical: 5.0),
              padding: EdgeInsets.all(10),
              decoration: BoxDecoration(
                color: Color(0xff22272c),
                borderRadius: BorderRadius.all(
                  Radius.circular(15),
                ),
              ),
              child: ListTile(
                tileColor: Color(0xff22272c),
                title: Text(
                  'Physical & Activity',
                  style: TextStyle(
                    color: Colors.white,
                  ),
                ),
              ),
            ),
            Container(
              margin: EdgeInsets.symmetric(horizontal: 10.0, vertical: 5.0),
              padding: EdgeInsets.all(10),
              decoration: BoxDecoration(
                color: Color(0xff22272c),
                borderRadius: BorderRadius.all(
                  Radius.circular(15),
                ),
              ),
              child: ListTile(
                tileColor: Color(0xff22272c),
                title: Text(
                  'My Trainer',
                  style: TextStyle(
                    color: Colors.white,
                  ),
                ),
              ),
            ),
            SizedBox(
              height: 30,
            ),
            Text(
              "Account",
              style: TextStyle(
                color: Colors.white,
                fontSize: 23,
                fontWeight: FontWeight.bold,
              ),
            ),
            Container(
              margin: EdgeInsets.symmetric(horizontal: 10.0, vertical: 5.0),
              padding: EdgeInsets.all(10),
              decoration: BoxDecoration(
                color: Color(0xff22272c),
                borderRadius: BorderRadius.all(
                  Radius.circular(15),
                ),
              ),
              child: ListTile(
                tileColor: Color(0xff22272c),
                title: Text(
                  'Email',
                  style: TextStyle(
                    color: Colors.white,
                  ),
                ),
              ),
            ),
            Container(
              margin: EdgeInsets.symmetric(horizontal: 10.0, vertical: 5.0),
              padding: EdgeInsets.all(10),
              decoration: BoxDecoration(
                color: Color(0xff22272c),
                borderRadius: BorderRadius.all(
                  Radius.circular(15),
                ),
              ),
              child: ListTile(
                tileColor: Color(0xff22272c),
                title: Text(
                  'Phone',
                  style: TextStyle(
                    color: Colors.white,
                  ),
                ),
              ),
            ),
            Container(
              margin: EdgeInsets.symmetric(horizontal: 10.0, vertical: 5.0),
              padding: EdgeInsets.all(10),
              decoration: BoxDecoration(
                color: Color(0xff22272c),
                borderRadius: BorderRadius.all(
                  Radius.circular(15),
                ),
              ),
              child: ListTile(
                tileColor: Color(0xff22272c),
                title: Text(
                  'Subscription',
                  style: TextStyle(
                    color: Colors.white,
                  ),
                ),
              ),
            ),
            SizedBox(
              height: 30,
            ),
            Text(
              "Privacy & Security",
              style: TextStyle(
                color: Colors.white,
                fontSize: 23,
                fontWeight: FontWeight.bold,
              ),
            ),
            Container(
              margin: EdgeInsets.symmetric(horizontal: 10.0, vertical: 5.0),
              padding: EdgeInsets.all(10),
              decoration: BoxDecoration(
                color: Color(0xff22272c),
                borderRadius: BorderRadius.all(
                  Radius.circular(15),
                ),
              ),
              child: ListTile(
                tileColor: Color(0xff22272c),
                title: Text(
                  'Password',
                  style: TextStyle(
                    color: Colors.white,
                  ),
                ),
              ),
            ),
            Container(
              margin: EdgeInsets.symmetric(horizontal: 10.0, vertical: 5.0),
              padding: EdgeInsets.all(10),
              decoration: BoxDecoration(
                color: Color(0xff22272c),
                borderRadius: BorderRadius.all(
                  Radius.circular(15),
                ),
              ),
              child: ListTile(
                tileColor: Color(0xff22272c),
                title: Text(
                  'Privacy and Data',
                  style: TextStyle(
                    color: Colors.white,
                  ),
                ),
              ),
            ),
            Container(
              margin: EdgeInsets.symmetric(horizontal: 10.0, vertical: 5.0),
              padding: EdgeInsets.all(10),
              decoration: BoxDecoration(
                color: Color(0xff22272c),
                borderRadius: BorderRadius.all(
                  Radius.circular(15),
                ),
              ),
              child: ListTile(
                onTap: () {
                  displayModalBottomSheet(context);
                },
                tileColor: Color(0xff22272c),
                title: Text(
                  'Logout',
                  style: TextStyle(
                    color: Colors.white,
                  ),
                ),
              ),
            ),
            SizedBox(
              height: 30,
            )
          ],
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
}
