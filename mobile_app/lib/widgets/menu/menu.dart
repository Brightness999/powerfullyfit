import 'package:adv_fab/adv_fab.dart';
import 'package:flutter/material.dart';
import 'package:rxdart/subjects.dart';

import 'menu-item.dart';
import 'package:mobile_app/screens/home/home_screen.state.dart';

class AppMenu extends StatelessWidget {
  final AdvFabController mabialaFABController;
  final BehaviorSubject stateStream;

  AppMenu({
    this.mabialaFABController,
    this.stateStream,
  });

  @override
  Widget build(BuildContext context) {
    return AdvFab(
      showLogs: true,
      onPannelTapped: () {
        print('onPannelTapped');
      },
      onFloatingActionButtonTapped: () {
        mabialaFABController.setExpandedWidgetConfiguration(
          showLogs: true,
          heightToExpandTo: 75,
          expendedBackgroundColor: Colors.grey[600].withOpacity(
            .7,
          ),
          withChild: Padding(
            padding: const EdgeInsets.all(
              8.0,
            ),
            child: Container(
              width: (MediaQuery.of(context).size.width),
              height: (MediaQuery.of(context).size.height / 100) * 20,
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: <Widget>[
                  Expanded(
                    flex: 5,
                    child: Column(
                      children: [
                        Wrap(
                          direction: Axis.horizontal,
                          runAlignment: WrapAlignment.spaceEvenly,
                          spacing: 10.0,
                          children: [
                            MenuItem(
                              name: 'Workouts',
                              icon: Icons.fitness_center,
                              onPressed: () {
                                stateStream.add(screenState.Workout);
                                mabialaFABController.collapseFAB();
                              },
                            ),
                            MenuItem(
                              name: 'Education',
                              icon: Icons.school,
                              onPressed: () {
                                stateStream.add(screenState.Education);
                                mabialaFABController.collapseFAB();
                              },
                            ),
                            MenuItem(
                              name: 'Comunity',
                              icon: Icons.people,
                              onPressed: () {
                                stateStream.add(screenState.CommunityBoard);
                                mabialaFABController.collapseFAB();
                              },
                            ),
                            Align(
                              alignment: Alignment.bottomCenter,
                              child: Text(
                                '-',
                              ),
                            ),
                          ],
                        ),
                      ],
                    ),
                  ),
                ],
              ),
            ),
          ),
        );
        mabialaFABController.isCollapsed
            ? mabialaFABController.expandFAB()
            : mabialaFABController.collapseFAB();
      },
      floatingActionButtonIcon: Icons.menu,
      floatingActionButtonIconColor: Colors.white,
      floatingActionButtonExpendedWidth:
          (MediaQuery.of(context).size.width / 100) * 20,
      collapsedColor: Colors.blue,
      useAsFloatingActionButton: true,
      controller: mabialaFABController,
      animationDuration: Duration(milliseconds: 300),
    );
  }
}
