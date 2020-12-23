import 'package:flutter/material.dart';
import 'package:mobile_app/widgets/cards/primary-card.ui.dart';

class PostScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.transparent,
        title: Text(
          'Community',
          style: new TextStyle(
            fontWeight: FontWeight.bold,
            fontSize: 26.0,
            color: Colors.white,
          ),
        ),
      ),
      body: Container(
        padding: EdgeInsets.symmetric(
          horizontal: MediaQuery.of(context).size.width * .01,
        ),
        child: PrimaryCard(
          child: Column(
            children: [
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Row(
                    children: [
                      GestureDetector(
                        onTap: () {},
                        child: Container(
                          height: MediaQuery.of(context).size.width * .1,
                          width: MediaQuery.of(context).size.width * .1,
                          margin: EdgeInsets.only(right: 20),
                          decoration: new BoxDecoration(
                              shape: BoxShape.circle,
                              image: DecorationImage(
                                fit: BoxFit.fill,
                                image: NetworkImage(
                                  'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhips.hearstapps.com%2Fhbz.h-cdn.co%2Fassets%2F16%2F43%2Fhbz-dark-blonde-hair-magdalena-frackowiak.jpg%3Fcrop%3D1.0xw%3A1xh%3Bcenter%2Ctop%26resize%3D768%3A*&f=1&nofb=1',
                                ),
                              )),
                        ),
                      ),
                      Text(
                        "Sam Davis",
                        style: TextStyle(
                          color: Colors.white,
                          fontSize: 20,
                        ),
                      ),
                    ],
                  ),
                  Text(
                    "2:10 PM",
                    style: TextStyle(
                      color: Colors.white,
                      fontSize: 15,
                    ),
                  )
                ],
              ),
              SizedBox(
                height: 20,
              ),
              Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                mainAxisSize: MainAxisSize.max,
                children: [
                  Text(
                    "Welcome to Powerfully Fit",
                    style: TextStyle(
                      color: Colors.white,
                      fontSize: 15,
                    ),
                  ),
                  Image.asset(
                    'assets/today-workout.png',
                    width: MediaQuery.of(context).size.width,
                  )
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }
}
