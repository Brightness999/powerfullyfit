import 'package:flutter/material.dart';

class WorkoutScreen extends StatefulWidget {
  _WorkoutScreen createState() => _WorkoutScreen();
}

class _WorkoutScreen extends State<WorkoutScreen> {
  bool isOpen = false;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: CustomScrollView(
        slivers: [
          SliverAppBar(
            floating: true,
            pinned: true,
            snap: false,
            backgroundColor: Colors.transparent,
            expandedHeight: MediaQuery.of(context).size.height * .27,
            flexibleSpace: FlexibleSpaceBar(
              title: Container(
                constraints: BoxConstraints.expand(
                  height: MediaQuery.of(context).size.height * .27,
                ),
                alignment: Alignment.bottomLeft,
                padding: EdgeInsets.only(left: 16.0, bottom: 8.0),
                decoration: BoxDecoration(
                  image: DecorationImage(
                    image: AssetImage('assets/today-workout.png'),
                    fit: BoxFit.cover,
                  ),
                ),
                child: Text(
                  'Biceps & Abs Workout - 30 mins',
                  style: new TextStyle(
                    fontWeight: FontWeight.bold,
                    fontSize: 23.0,
                    color: Colors.white,
                  ),
                ),
              ),
            ),
            actions: <Widget>[],
          ),
          SliverList(
            delegate: SliverChildListDelegate(
              [
                SizedBox(
                  height: 50,
                ),
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceAround,
                  children: [
                    FlatButton(
                      onPressed: () {},
                      color: Colors.grey,
                      textColor: Colors.white,
                      child: Text(
                        "START",
                        style: new TextStyle(
                          fontSize: 25.0,
                          color: Colors.white,
                        ),
                      ),
                      padding: EdgeInsets.all(36),
                      shape: CircleBorder(),
                    ),
                    Text(
                      "0:00",
                      style: new TextStyle(
                        fontSize: 73.0,
                        color: Colors.white,
                      ),
                    )
                  ],
                ),
                SizedBox(
                  height: 50,
                ),
                Container(
                  margin: EdgeInsets.only(left: 16.0, bottom: 16.0),
                  child: Text(
                    "Exercises",
                    style: new TextStyle(
                        fontSize: 25.0,
                        color: Colors.white,
                        fontWeight: FontWeight.bold),
                  ),
                ),
                ExpansionPanelList(
                  expansionCallback: (int index, bool isExpanded) {
                    setState(() {
                      isOpen = !isOpen;
                    });
                  },
                  children: [
                    ExpansionPanel(
                      canTapOnHeader: true,
                      headerBuilder: (BuildContext context, bool isExpanded) {
                        return Text(
                          "Bicep Curls",
                          textAlign: TextAlign.left,
                          style: TextStyle(
                            fontSize: 20.0,
                            fontWeight: FontWeight.w400,
                          ),
                        );
                      },
                      isExpanded: isOpen,
                      body: Text(""),
                    ),
                    ExpansionPanel(
                      canTapOnHeader: true,
                      headerBuilder: (BuildContext context, bool isExpanded) {
                        return Text(
                          "Bicep Curls",
                          textAlign: TextAlign.left,
                          style: TextStyle(
                            fontSize: 20.0,
                            fontWeight: FontWeight.w400,
                          ),
                        );
                      },
                      isExpanded: isOpen,
                      body: Text(""),
                    ),
                    ExpansionPanel(
                      canTapOnHeader: true,
                      headerBuilder: (BuildContext context, bool isExpanded) {
                        return Text(
                          "Bicep Curls",
                          textAlign: TextAlign.left,
                          style: TextStyle(
                            fontSize: 20.0,
                            fontWeight: FontWeight.w400,
                          ),
                        );
                      },
                      isExpanded: isOpen,
                      body: Text(""),
                    ),
                    ExpansionPanel(
                      canTapOnHeader: true,
                      headerBuilder: (BuildContext context, bool isExpanded) {
                        return Text(
                          "Bicep Curls",
                          textAlign: TextAlign.left,
                          style: TextStyle(
                            fontSize: 20.0,
                            fontWeight: FontWeight.w400,
                          ),
                        );
                      },
                      isExpanded: isOpen,
                      body: Text(""),
                    ),
                    ExpansionPanel(
                      canTapOnHeader: true,
                      headerBuilder: (BuildContext context, bool isExpanded) {
                        return Text(
                          "Bicep Curls",
                          textAlign: TextAlign.left,
                          style: TextStyle(
                            fontSize: 20.0,
                            fontWeight: FontWeight.w400,
                          ),
                        );
                      },
                      isExpanded: isOpen,
                      body: Text(""),
                    ),
                    ExpansionPanel(
                      canTapOnHeader: true,
                      headerBuilder: (BuildContext context, bool isExpanded) {
                        return Text(
                          "Bicep Curls",
                          textAlign: TextAlign.left,
                          style: TextStyle(
                            fontSize: 20.0,
                            fontWeight: FontWeight.w400,
                          ),
                        );
                      },
                      isExpanded: isOpen,
                      body: Text(""),
                    ),
                    ExpansionPanel(
                      canTapOnHeader: true,
                      headerBuilder: (BuildContext context, bool isExpanded) {
                        return Text(
                          "Bicep Curls",
                          textAlign: TextAlign.left,
                          style: TextStyle(
                            fontSize: 20.0,
                            fontWeight: FontWeight.w400,
                          ),
                        );
                      },
                      isExpanded: isOpen,
                      body: Text(""),
                    ),
                  ],
                ),
              ],
            ),
          )
        ],
      ),
    );
  }
}
