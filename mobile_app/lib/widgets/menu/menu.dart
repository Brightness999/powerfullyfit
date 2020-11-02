import 'package:adv_fab/adv_fab.dart';
import 'package:flutter/material.dart';
import 'package:mobile_app/screens/auth/login/login_ui.dart';
import 'package:rxdart/subjects.dart';
import 'package:mobile_app/main_screen.state.dart';

import 'menu-item.dart';

class AppMenu extends StatelessWidget {
  final AdvFabController mabialaFABController;
  final BehaviorSubject stateStream;

  AppMenu({this.mabialaFABController, this.stateStream});

  @override
  Widget build(BuildContext context) {
    return AdvFab(
      showLogs: true,
      onFloatingActionButtonTapped: () {
        mabialaFABController.setExpandedWidgetConfiguration(
          showLogs: true,
          heightToExpandTo: 75,
          expendedBackgroundColor: Colors.grey[500].withOpacity(.7),
          withChild: Padding(
            padding: const EdgeInsets.all(8.0),
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
                          runAlignment: WrapAlignment.spaceAround,
                          children: [
                            MenuItem(
                              name: 'Workouts',
                              onPressed: () {
                                stateStream.add(screenState.Workout);
                                mabialaFABController.collapseFAB();
                              },
                            ),
                            MenuItem(
                              name: 'Education',
                              onPressed: () {
                                stateStream.add(screenState.Education);
                                mabialaFABController.collapseFAB();
                              },
                            ),
                            MenuItem(
                              name: 'Comunity',
                              onPressed: () {
                                stateStream.add(screenState.CommunityBoard);
                                mabialaFABController.collapseFAB();
                              },
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
      floatingActionButtonIcon: Icons.add,
      floatingActionButtonIconColor: Colors.red,
      navigationBarIconActiveColor: Colors.pink,
      navigationBarIconInactiveColor: Colors.pink[200].withOpacity(0.6),
      floatingActionButtonExpendedWidth:
          (MediaQuery.of(context).size.width / 100) * 20,
      collapsedColor: Colors.grey[200],
      useAsFloatingActionButton: true,
      controller: mabialaFABController,
      animationDuration: Duration(milliseconds: 300),
    );
  }
}
