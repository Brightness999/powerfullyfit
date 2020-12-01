import 'package:expansion_tile_card/expansion_tile_card.dart';
import 'package:flutter/material.dart';
import 'package:mobile_app/theme/colors.dart';
import 'package:mobile_app/widgets/cards/primary-card.ui.dart';

import 'package:step_progress_indicator/step_progress_indicator.dart';

class WeeklyGoals extends StatefulWidget {
  @override
  _WeeklyGoals createState() => _WeeklyGoals();
}

class _WeeklyGoals extends State<WeeklyGoals> {
  @override
  Widget build(BuildContext context) {
    return Container(
      // title: "My Weekly Goals",
      child: Container(
        // padding: EdgeInsets.all(10),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.spaceAround,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Container(
              margin: EdgeInsets.only(
                  bottom: MediaQuery.of(context).size.height * .01),
              child: ExpansionTileCard(
                borderRadius: new BorderRadius.circular(
                  20.0,
                ),
                baseColor: appDarkGrey,
                expandedColor: appDarkGrey,
                title: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Container(
                      margin: EdgeInsets.only(
                        top: 20,
                      ),
                      child: Text(
                        "Weekly Workouts (2/4)",
                      ),
                    ),
                    Container(
                      margin: EdgeInsets.only(
                        top: MediaQuery.of(context).size.height * .01,
                      ),
                      child: StepProgressIndicator(
                        totalSteps: 4,
                        currentStep: 2,
                        size: 36,
                        selectedColor: Colors.black,
                        unselectedColor: Colors.grey[200],
                        customStep: (index, color, _) => color == Colors.black
                            ? Container(
                                child: Icon(
                                  Icons.check_circle,
                                  color: Colors.greenAccent,
                                ),
                              )
                            : Container(
                                child: Icon(
                                  Icons.stop_circle,
                                  color: Colors.blueAccent,
                                ),
                              ),
                      ),
                    ),
                  ],
                ),
                children: <Widget>[
                  Divider(
                    thickness: 1.0,
                    height: 1.0,
                  ),
                  Align(
                    alignment: Alignment.centerLeft,
                    child: Padding(
                      padding: const EdgeInsets.symmetric(
                        horizontal: 16.0,
                        vertical: 8.0,
                      ),
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text(
                            "Macros milestone reached (4/5)",
                            style: TextStyle(
                              color: Colors.white,
                              fontSize: 17,
                            ),
                          ),
                          Container(
                            margin: EdgeInsets.only(
                              top: MediaQuery.of(context).size.height * .02,
                            ),
                            child: StepProgressIndicator(
                              totalSteps: 5,
                              currentStep: 4,
                              size: 36,
                              selectedColor: Colors.black,
                              unselectedColor: Colors.grey[200],
                              customStep: (index, color, _) =>
                                  color == Colors.black
                                      ? Container(
                                          child: Icon(
                                            Icons.check_circle,
                                            color: Colors.greenAccent,
                                          ),
                                        )
                                      : Container(
                                          child: Icon(
                                            Icons.stop_circle,
                                            color: Colors.blueAccent,
                                          ),
                                        ),
                            ),
                          )
                        ],
                      ),
                    ),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
