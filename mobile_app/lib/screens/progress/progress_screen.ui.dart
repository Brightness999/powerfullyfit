import 'package:flutter/material.dart';
import 'package:charts_flutter/flutter.dart' as charts;
import 'package:mobile_app/widgets/buttons/primary_button.dart';
import 'package:mobile_app/widgets/cards/primary-card.ui.dart';
import 'package:mobile_app/widgets/charts/line.chart.dart';

class ProgressScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(
        horizontal: 5,
      ),
      child: ListView(
        children: <Widget>[
          const Align(
            alignment: Alignment.centerLeft,
            child: Padding(
              padding: EdgeInsets.only(
                top: 24,
              ),
              child: Text(
                'My Progress',
                style: TextStyle(
                    color: Colors.white,
                    fontSize: 32,
                    fontWeight: FontWeight.bold),
              ),
            ),
          ),
          SizedBox(
            height: 5,
          ),
          PrimaryCard(
            child: LineChartSample1(),
          ),
          SizedBox(
            height: 20,
          ),
          PrimaryButton(
            onPressed: () {
              // Navigator.pushReplacement(
              //   context,
              //   MaterialPageRoute(builder: (BuildContext context) {
              //     return HomeScreen();
              //   }),
              // );
            },
            child: Center(
              child: Text(
                'UPDATE PROGRESS',
                style: TextStyle(
                  color: Colors.white,
                  fontSize: 28,
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }
}
