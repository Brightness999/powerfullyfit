import 'package:flutter/material.dart';
import 'package:mobile_app/constants/app-images.dart';
import 'package:mobile_app/screens/progress/progress_details/progress_details_screen.ui.dart';
import 'package:mobile_app/widgets/buttons/primary_button.dart';
import 'package:mobile_app/widgets/buttons/return_summary.button.dart';
import 'package:mobile_app/widgets/cards/primary-card.ui.dart';
import 'package:mobile_app/widgets/charts/line.chart.dart';

class OverallProgressScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        leading: ReturnSummaryButton(),
        title: Text(
          'My Progress',
        ),
      ),
      body: Container(
        padding: const EdgeInsets.symmetric(
          horizontal: 8,
        ),
        child: ListView(
          children: <Widget>[
            SizedBox(
              height: 5,
            ),
            PrimaryCard(
              child: LineChartSample1(),
            ),
            SizedBox(
              height: 20,
            ),
            Row(
              children: [
                Expanded(
                  child: GestureDetector(
                    onTap: () {
                      Navigator.push(
                        context,
                        MaterialPageRoute(builder: (BuildContext context) {
                          return ProgressDetailsScreen();
                        }),
                      );
                    },
                    child: Image.asset(
                      AppImages.beforeAfter,
                      fit: BoxFit.contain,
                    ),
                  ),
                ),
              ],
            ),
            SizedBox(height: 10),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceAround,
              children: [
                Text(
                  "Day 1",
                  style: TextStyle(
                    fontSize: 15,
                    fontWeight: FontWeight.bold,
                  ),
                ),
                Text(
                  "Day 30",
                  style: TextStyle(
                    fontSize: 15,
                    fontWeight: FontWeight.bold,
                  ),
                ),
              ],
            ),
            SizedBox(
              height: 10,
            ),
            PrimaryButton(
              onPressed: () {},
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
      ),
    );
  }
}
