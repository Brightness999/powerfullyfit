import 'package:adv_fab/adv_fab.dart';
import 'package:flutter/material.dart';
import 'package:step_progress_indicator/step_progress_indicator.dart';

class DailyNutritionScreen extends StatefulWidget {
  @override
  _DailyNutritionScreen createState() => _DailyNutritionScreen();
}

class _DailyNutritionScreen extends State {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Color(0xFF3F3F3F),
        title: Text(
          "Daily Nutrition",
          style: TextStyle(
            color: Colors.white,
            fontSize: 25,
          ),
        ),
      ),
      body: Column(
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          SizedBox(
            height: 50,
          ),
          SizedBox(
            height: 30,
          ),
          CircularStepProgressIndicator(
            totalSteps: 100,
            currentStep: 72,
            stepSize: 9,
            selectedColor: Colors.greenAccent,
            unselectedColor: Colors.grey[200],
            padding: 0,
            height: 300,
            width: 300,
            roundedCap: (_, __) => true,
            child: Center(
              child: CircularStepProgressIndicator(
                totalSteps: 100,
                currentStep: 72,
                selectedColor: Colors.redAccent,
                unselectedColor: Colors.grey[200],
                padding: 0,
                height: 267,
                width: 267,
                stepSize: 9,
                roundedCap: (_, __) => true,
                child: Center(
                  child: CircularStepProgressIndicator(
                    totalSteps: 100,
                    currentStep: 72,
                    selectedColor: Colors.blueGrey,
                    unselectedColor: Colors.grey[200],
                    padding: 0,
                    height: 235,
                    width: 235,
                    stepSize: 9,
                    roundedCap: (_, __) => true,
                    child: Center(
                      child: CircularStepProgressIndicator(
                        totalSteps: 100,
                        currentStep: 72,
                        selectedColor: Color(0xff99755A),
                        unselectedColor: Colors.grey[200],
                        padding: 0,
                        height: 195,
                        width: 195,
                        stepSize: 9,
                        roundedCap: (_, __) => true,
                      ),
                    ),
                  ),
                ),
              ),
            ),
          ),
          SizedBox(
            height: 30,
          ),
          Container(
            padding: EdgeInsets.all(
              MediaQuery.of(context).size.height * .02,
            ),
            margin: EdgeInsets.all(
              MediaQuery.of(context).size.height * .01,
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
                    fontSize: 17,
                  ),
                ),
                SizedBox(
                  height: 20,
                ),
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceAround,
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
                          currentStep: 72,
                          selectedColor: Colors.redAccent,
                          unselectedColor: Colors.grey[200],
                          padding: 0,
                          height: 75,
                          width: 75,
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
                          currentStep: 72,
                          selectedColor: Colors.greenAccent,
                          unselectedColor: Colors.grey[200],
                          padding: 0,
                          height: 75,
                          width: 75,
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
                          currentStep: 72,
                          selectedColor: Color(0Xff99755A),
                          unselectedColor: Colors.grey[200],
                          padding: 0,
                          height: 75,
                          width: 75,
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
                          currentStep: 72,
                          selectedColor: Colors.blueGrey,
                          unselectedColor: Colors.grey[200],
                          padding: 0,
                          height: 75,
                          width: 75,
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
                    )
                  ],
                ),
              ],
            ),
          ),
          Container(
            padding: EdgeInsets.all(
              MediaQuery.of(context).size.height * .02,
            ),
            decoration: BoxDecoration(
              color: Color(0xff99755A),
              borderRadius: BorderRadius.all(
                Radius.circular(25),
              ),
            ),
            child: FlatButton(
              onPressed: () {},
              child: Text(
                "Enter Macros",
                style: TextStyle(
                  color: Colors.white,
                  fontSize: 33,
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }
}
