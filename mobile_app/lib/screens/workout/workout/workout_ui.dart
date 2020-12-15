import 'package:expansion_tile_card/expansion_tile_card.dart';
import 'package:flutter/material.dart';
import 'package:mobile_app/entities/Exercise.entity.dart';
import 'package:mobile_app/entities/workout.dart';
import 'package:mobile_app/models/workout-type.enum.dart';
import 'package:mobile_app/theme/colors.dart';

import 'package:mobile_app/widgets/timer/timer.dart';

// ignore: must_be_immutable
class WorkoutScreen extends StatelessWidget {
  Workout workout = Workout(
    name: "Biceps & Abs Workout",
    duration: "30 mins",
    type: WorkoutType.HIIT,
    status: 'Complete',
    exercises: [
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
    ],
  );

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
                padding: EdgeInsets.only(
                  left: 16.0,
                  bottom: 8.0,
                ),
                decoration: BoxDecoration(
                  image: DecorationImage(
                    image: AssetImage(workout.picture),
                    fit: BoxFit.cover,
                  ),
                ),
                child: Wrap(
                  children: [
                    RichText(
                      text: TextSpan(
                        children: [
                          TextSpan(
                            text: workout.name,
                            style: new TextStyle(
                              fontWeight: FontWeight.bold,
                              fontSize: 26.0,
                            ),
                          ),
                          TextSpan(
                            text: " - ",
                            style: new TextStyle(
                              fontSize: 26.0,
                            ),
                          ),
                          TextSpan(
                            text: workout.duration,
                            style: new TextStyle(
                              fontSize: 26.0,
                            ),
                          ),
                        ],
                      ),
                    ),
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
                            workout.type.toString().split('.').last,
                            style: new TextStyle(
                              fontSize: 17.0,
                            ),
                          ),
                        ),
                        SizedBox(
                          width: 10,
                        ),
                        Text(
                          workout.status,
                          style: new TextStyle(
                            fontSize: 17.0,
                            color: Colors.greenAccent,
                          ),
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
                  Container(
                    margin: EdgeInsets.symmetric(vertical: 20),
                    child: WorkoutTimer(),
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
                        ...workout.exercises.map((Exercise exercise) {
                          return Container(
                            margin: EdgeInsets.only(
                              bottom: MediaQuery.of(context).size.height * .01,
                            ),
                            child: ExpansionTileCard(
                              baseColor: darkGrey,
                              expandedColor: darkGrey,
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
