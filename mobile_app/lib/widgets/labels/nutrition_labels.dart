import 'package:flutter/material.dart';
import 'package:mobile_app/theme/colors.dart';

class NutritionLabels extends StatefulWidget {
  @override
  _NutritionLabels createState() => _NutritionLabels();
}

class _NutritionLabels extends State<NutritionLabels> {
  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceAround,
      children: [
        Container(
          child: Row(
            children: [
              Container(
                color: Colors.redAccent,
                height: MediaQuery.of(context).size.height * .01,
                width: MediaQuery.of(context).size.height * .01,
              ),
              SizedBox(
                width: 5,
              ),
              Text("Calories")
            ],
          ),
        ),
        Container(
          child: Row(
            children: [
              Container(
                color: Colors.greenAccent,
                height: MediaQuery.of(context).size.height * .01,
                width: MediaQuery.of(context).size.height * .01,
              ),
              SizedBox(
                width: 5,
              ),
              Text("Protein")
            ],
          ),
        ),
        Container(
          child: Row(
            children: [
              Container(
                color: appBrown,
                height: MediaQuery.of(context).size.height * .01,
                width: MediaQuery.of(context).size.height * .01,
              ),
              SizedBox(
                width: 5,
              ),
              Text("Carbs")
            ],
          ),
        ),
        Container(
          child: Row(
            children: [
              Container(
                color: Colors.blueAccent,
                height: MediaQuery.of(context).size.height * .01,
                width: MediaQuery.of(context).size.height * .01,
              ),
              SizedBox(
                width: 5,
              ),
              Text("Fat")
            ],
          ),
        ),
      ],
    );
  }
}
