import 'package:flutter/material.dart';
import 'package:step_progress_indicator/step_progress_indicator.dart';

class DailyNutrition extends StatelessWidget {
  final String title;
  final Widget child;

  DailyNutrition({this.title, this.child});

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: EdgeInsets.symmetric(
        vertical: MediaQuery.of(context).size.height * .01,
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          if (title != null)
            Text(
              title,
              style: TextStyle(
                color: Colors.white,
                fontSize: 25,
                fontWeight: FontWeight.bold,
              ),
            ),
          SizedBox(
            height: 20,
          ),
          Container(
            padding: EdgeInsets.all(
              MediaQuery.of(context).size.height * .02,
            ),
            decoration: BoxDecoration(
              color: Color(0xff22272c),
              borderRadius: BorderRadius.all(
                Radius.circular(25),
              ),
            ),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  "Your Daily Nutrition Goal",
                  style: TextStyle(
                    color: Colors.white,
                    fontSize: 19,
                  ),
                ),
                SizedBox(
                  height: 20,
                ),
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Column(
                      children: [
                        Text(
                          "Calories",
                          style: TextStyle(
                            color: Colors.white,
                            fontSize: 15,
                          ),
                        ),
                        SizedBox(
                          height: 15,
                        ),
                        CircularStepProgressIndicator(
                          totalSteps: 100,
                          currentStep: 80,
                          selectedColor: Colors.redAccent,
                          unselectedColor: Colors.grey[200],
                          padding: 0,
                          height: MediaQuery.of(context).size.height * .07,
                          width: MediaQuery.of(context).size.height * .07,
                          child: Center(
                            child: Text(
                              "1586",
                              style: TextStyle(
                                color: Colors.white,
                                fontSize: 15,
                              ),
                            ),
                          ),
                        )
                      ],
                    ),
                    Column(
                      children: [
                        Text(
                          "Protein",
                          style: TextStyle(
                            color: Colors.white,
                            fontSize: 15,
                          ),
                        ),
                        SizedBox(
                          height: 15,
                        ),
                        CircularStepProgressIndicator(
                          totalSteps: 100,
                          currentStep: 52,
                          selectedColor: Colors.greenAccent,
                          unselectedColor: Colors.grey[200],
                          padding: 0,
                          height: MediaQuery.of(context).size.height * .07,
                          width: MediaQuery.of(context).size.height * .07,
                          child: Center(
                            child: Text(
                              "1586",
                              style: TextStyle(
                                color: Colors.white,
                                fontSize: 15,
                              ),
                            ),
                          ),
                        )
                      ],
                    ),
                    Column(
                      children: [
                        Text(
                          "Carbs",
                          style: TextStyle(
                            color: Colors.white,
                            fontSize: 15,
                          ),
                        ),
                        SizedBox(
                          height: 15,
                        ),
                        CircularStepProgressIndicator(
                          totalSteps: 100,
                          currentStep: 32,
                          selectedColor: Color(0Xff99755A),
                          unselectedColor: Colors.grey[200],
                          padding: 0,
                          height: MediaQuery.of(context).size.height * .07,
                          width: MediaQuery.of(context).size.height * .07,
                          child: Center(
                            child: Text(
                              "1586",
                              style: TextStyle(
                                color: Colors.white,
                                fontSize: 15,
                              ),
                            ),
                          ),
                        )
                      ],
                    ),
                    Column(
                      children: [
                        Text(
                          "Fat",
                          style: TextStyle(
                            color: Colors.white,
                            fontSize: 15,
                          ),
                        ),
                        SizedBox(
                          height: 15,
                        ),
                        CircularStepProgressIndicator(
                          totalSteps: 100,
                          currentStep: 62,
                          selectedColor: Colors.blueGrey,
                          unselectedColor: Colors.grey[200],
                          padding: 0,
                          height: MediaQuery.of(context).size.height * .07,
                          width: MediaQuery.of(context).size.height * .07,
                          child: Center(
                            child: Text(
                              "1586",
                              style: TextStyle(
                                color: Colors.white,
                                fontSize: 15,
                              ),
                            ),
                          ),
                        ),
                      ],
                    )
                  ],
                ),
                if (child != null) child
              ],
            ),
          ),
        ],
      ),
    );
  }
}
