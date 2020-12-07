import 'dart:async';

import 'package:expansion_tile_card/expansion_tile_card.dart';
import 'package:flutter/material.dart';
import 'package:mobile_app/entities/Exercise.entity.dart';
import 'package:mobile_app/theme/colors.dart';

import 'package:expansion_card/expansion_card.dart';
import 'package:mobile_app/widgets/cards/primary-card.ui.dart';

class WorkoutScreen extends StatefulWidget {
  _WorkoutScreen createState() => _WorkoutScreen();
}

class _WorkoutScreen extends State<WorkoutScreen> {
  final GlobalKey<ExpansionTileCardState> cardA = new GlobalKey();
  final GlobalKey<ExpansionTileCardState> cardB = new GlobalKey();

  List<Exercise> exercises = [
    Exercise.example(
      name: "Bicep Curls",
      isDone: true,
    ),
    Exercise.example(
      name: "Barbell Curls",
      isDone: true,
    ),
    Exercise.example(name: "Situps"),
    Exercise.example(name: "Pushups"),
    Exercise.example(name: "Planks"),
  ];

  static const duration = const Duration(seconds: 1);

  int secondsPassed = 0;
  bool isActive = false;

  Timer timer;

  void handleTick() {
    if (mounted) {
      print(secondsPassed.toString());
      if (isActive) {
        setState(() {
          secondsPassed = secondsPassed + 1;
        });
      }
    }
  }

  void resetTimer() {
    if (mounted) {
      setState(() {
        secondsPassed = 0;
      });
    }
  }

  @override
  void dispose() {
    this.timer = null;

    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    if (timer == null)
      timer = Timer.periodic(duration, (Timer t) {
        handleTick();
      });

    int seconds = secondsPassed % 60;
    int minutes = secondsPassed ~/ 60;
    int hours = secondsPassed ~/ (60 * 60);

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
                child: Wrap(
                  children: [
                    Text(
                      'Biceps & Abs Workout - 30 mins',
                      style: new TextStyle(
                        fontWeight: FontWeight.bold,
                        fontSize: 26.0,
                        color: Colors.white,
                      ),
                    ),
                    // Text(
                    //   '- 30 min',
                    //   style: new TextStyle(
                    //     fontSize: 23.0,
                    //     color: Colors.white,
                    //   ),
                    // ),
                    Row(
                      children: [
                        Container(
                          padding: EdgeInsets.all(
                            MediaQuery.of(context).size.height * .005,
                          ),
                          decoration: BoxDecoration(
                            color: Colors.black,
                            borderRadius: BorderRadius.all(
                              Radius.circular(5),
                            ),
                          ),
                          child: Text(
                            'HIIT',
                            style: new TextStyle(
                              fontSize: 17.0,
                            ),
                          ),
                        ),
                        SizedBox(
                          width: 10,
                        ),
                        Text(
                          'Complete',
                          style: new TextStyle(
                              fontSize: 17.0, color: Colors.greenAccent),
                        ),
                      ],
                    ),
                  ],
                ),
              ),
            ),
          ),
          Container(
            child: SliverList(
              delegate: SliverChildListDelegate(
                [
                  SizedBox(
                    height: 10,
                  ),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceAround,
                    children: [
                      FlatButton(
                        onPressed: () {
                          print("start");

                          setState(() {
                            isActive = !isActive;
                          });
                        },
                        color: appDarkGrey,
                        textColor: Colors.white,
                        child: Text(
                          isActive ? "STOP" : "START",
                          style: new TextStyle(
                            fontSize: 25.0,
                            color: Colors.white,
                          ),
                        ),
                        padding: EdgeInsets.all(36),
                        shape: CircleBorder(
                          side: BorderSide(
                            color: isActive
                                ? Colors.redAccent
                                : Colors.greenAccent,
                          ),
                        ),
                      ),
                      Text(
                        minutes.toString().padLeft(2, '0') +
                            ":" +
                            seconds.toString().padLeft(2, '0'),
                        style: new TextStyle(
                          fontSize: 73.0,
                          color: Colors.white,
                        ),
                      ),
                    ],
                  ),
                  SizedBox(
                    height: 30,
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
                  Container(
                    margin: EdgeInsets.symmetric(
                        horizontal: MediaQuery.of(context).size.width * .01),
                    child: Column(
                      children: [
                        ...exercises.map((Exercise exercise) {
                          return Container(
                            margin: EdgeInsets.only(
                              bottom: MediaQuery.of(context).size.height * .01,
                            ),
                            child: ExpansionTileCard(
                              baseColor: appDarkGrey,
                              expandedColor: appDarkGrey,
                              // key: cardA,
                              leading: CircleAvatar(
                                child: Icon(
                                  Icons.fitness_center,
                                ),
                              ),
                              trailing: exercise.isDone
                                  ? CircleAvatar(
                                      radius: 13,
                                      backgroundColor: Colors.greenAccent,
                                      child: Icon(
                                        Icons.check_sharp,
                                        color: Colors.black,
                                        size: 23,
                                      ),
                                    )
                                  : null,
                              title: Text(
                                exercise.name.toString(),
                              ),
                              children: <Widget>[
                                Divider(
                                  thickness: 1.0,
                                  height: 1.0,
                                ),
                                if (exercise.sets != null)
                                  Align(
                                    alignment: Alignment.centerLeft,
                                    child: Padding(
                                      padding: const EdgeInsets.symmetric(
                                        horizontal: 16.0,
                                        vertical: 8.0,
                                      ),
                                      child: Column(
                                        children: exercise.sets
                                            .map(
                                              (e) => Container(
                                                margin: const EdgeInsets.only(
                                                  bottom: 16.0,
                                                ),
                                                child: Text(
                                                  "Set 1 (4x12)",
                                                  style: TextStyle(
                                                    fontSize: 18,
                                                  ),
                                                ),
                                              ),
                                            )
                                            .toList(),
                                      ),
                                    ),
                                  ),
                              ],
                            ),
                          );
                        }).toList(),
                      ],
                    ),
                  ),
                ],
              ),
            ),
          )
        ],
      ),
    );
  }
}
