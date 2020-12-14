import 'package:adv_fab/adv_fab.dart';
import 'package:flutter/material.dart';
import 'package:mobile_app/screens/messaging/message/message_ui.dart';
import 'package:mobile_app/theme/colors.dart';
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
        mabialaFABController.collapseFAB();
      },
      onFloatingActionButtonTapped: () {
        mabialaFABController.setExpandedWidgetConfiguration(
          showLogs: true,
          heightToExpandTo: 80,
          expendedBackgroundColor: Colors.grey[500].withOpacity(
            .9,
          ),
          withChild: Container(
            margin: EdgeInsets.only(
              top: MediaQuery.of(context).size.height * .05,
            ),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.spaceAround,
              children: [
                Wrap(
                  direction: Axis.horizontal,
                  alignment: WrapAlignment.center,
                  runAlignment: WrapAlignment.center,
                  spacing: 11.0,
                  runSpacing: 16.0,
                  children: [
                    MenuItem(
                      name: 'Workouts',
                      icon: Icons.fitness_center,
                      onPressed: () {
                        stateStream.add(screenState.WorkoutList);
                        mabialaFABController.collapseFAB();
                      },
                    ),
                    MenuItem(
                      name: 'Nutrition',
                      icon: Icons.emoji_food_beverage_sharp,
                      onPressed: () {
                        stateStream.add(screenState.Nutrition);
                        mabialaFABController.collapseFAB();
                      },
                    ),
                    MenuItem(
                      name: 'Inbox',
                      icon: Icons.chat,
                      onPressed: () {
                        mabialaFABController.collapseFAB();

                        Navigator.push(
                          context,
                          MaterialPageRoute(builder: (BuildContext context) {
                            return ChatScreen();
                          }),
                        );
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
                    MenuItem(
                      name: 'Progress',
                      icon: Icons.bar_chart,
                      onPressed: () {
                        stateStream.add(screenState.Progress);
                        mabialaFABController.collapseFAB();
                      },
                    ),
                    Center(
                      child: MenuItem(
                        name: 'Help',
                        icon: Icons.info,
                        onPressed: () {
                          stateStream.add(screenState.Help);
                          mabialaFABController.collapseFAB();
                        },
                      ),
                    ),
                  ],
                ),
              ],
            ),
          ),
        );
        mabialaFABController.isCollapsed
            ? mabialaFABController.expandFAB()
            : mabialaFABController.collapseFAB();
      },
      floatingActionButtonIcon: Icons.add,
      floatingActionButtonIconColor: appBrown,
      floatingActionButtonExpendedWidth:
          (MediaQuery.of(context).size.width) * .23,
      collapsedColor: appDarkGrey,
      useAsFloatingActionButton: true,
      controller: mabialaFABController,
      animationDuration: Duration(milliseconds: 300),
    );
  }
}
