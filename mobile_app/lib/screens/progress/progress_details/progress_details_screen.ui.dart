import 'package:camera/camera.dart';
import 'package:flutter/material.dart';
import 'package:mobile_app/constants/app-images.dart';
import 'package:mobile_app/screens/camera/camera_screen.dart';
import 'package:mobile_app/theme/colors.dart';
import 'package:mobile_app/widgets/buttons/primary_button.dart';
import 'package:mobile_app/widgets/buttons/return_summary.button.dart';

class ProgressDetailsScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        leading: ReturnSummaryButton(),
        title: Text(
          'My Progress',
        ),
      ),
      body: SingleChildScrollView(
        child: Container(
          padding: EdgeInsets.symmetric(
            horizontal: 8,
          ),
          child: Column(
            children: [
              Text(
                "Here you can track your progress. Below you can see the days so far that you have tracked your progress.",
              ),
              SizedBox(
                height: 20,
              ),
              Align(
                alignment: Alignment.centerLeft,
                child: Text(
                  "Day 1",
                  style: TextStyle(
                    fontWeight: FontWeight.bold,
                    fontSize: 25,
                  ),
                ),
              ),
              SizedBox(
                height: 15,
              ),
              Image.asset(
                AppImages.beforeAfter,
                fit: BoxFit.contain,
              ),
              SizedBox(
                height: 20,
              ),
              Align(
                alignment: Alignment.centerLeft,
                child: Text(
                  "Day 30",
                  style: TextStyle(
                    fontWeight: FontWeight.bold,
                    fontSize: 25,
                  ),
                ),
              ),
              SizedBox(
                height: 15,
              ),
              Image.asset(
                AppImages.beforeAfter,
                fit: BoxFit.contain,
              ),
              SizedBox(
                height: 10,
              ),
              PrimaryButton(
                onPressed: () async {
                  displayDeleteAccountBottomSheet(context);
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
        ),
      ),
    );
  }

  void displayDeleteAccountBottomSheet(context) {
    showModalBottomSheet(
      backgroundColor: darkGrey,
      context: context,
      builder: (BuildContext bc) {
        return Container(
          child: new Wrap(
            alignment: WrapAlignment.center,
            spacing: 5.0,
            runSpacing: 20.0,
            children: <Widget>[
              SizedBox(
                height: 30,
              ),
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceAround,
                children: [
                  FlatButton(
                    onPressed: () async {
                      // Obtain a list of the available cameras on the device.
                      final cameras = await availableCameras();

                      // Get a specific camera from the list of available cameras.
                      final firstCamera = cameras.first;

                      Navigator.push(
                        context,
                        MaterialPageRoute(builder: (BuildContext context) {
                          return CameraScreen(
                            camera: firstCamera,
                          );
                        }),
                      );
                    },
                    child: Container(
                      width: MediaQuery.of(context).size.width * .42,
                      padding: EdgeInsets.symmetric(
                        vertical: 5,
                      ),
                      decoration: BoxDecoration(
                        color: lightBrown,
                        borderRadius: BorderRadius.all(
                          Radius.circular(100),
                        ),
                        border: Border.all(
                          color: lightBrown,
                          width: 2,
                        ),
                      ),
                      child: Center(
                        child: Text(
                          "Take Picture",
                          style: TextStyle(
                            color: Colors.white,
                            fontSize: 26,
                          ),
                        ),
                      ),
                    ),
                  ),
                  FlatButton(
                    onPressed: () {
                      Navigator.pop(context);
                    },
                    child: Container(
                      width: MediaQuery.of(context).size.width * .42,
                      padding: EdgeInsets.symmetric(
                        // horizontal: MediaQuery.of(context).size.width * .12,
                        vertical: 5,
                      ),
                      decoration: BoxDecoration(
                        border: Border.all(
                          color: lightBrown,
                          width: 2,
                        ),
                        borderRadius: BorderRadius.all(
                          Radius.circular(100),
                        ),
                      ),
                      child: Center(
                        child: Text(
                          "Pick Picture",
                          style: TextStyle(
                            color: Colors.white,
                            fontSize: 26,
                          ),
                        ),
                      ),
                    ),
                  )
                ],
              ),
              SizedBox(height: 20),
            ],
          ),
        );
      },
    );
  }
}
