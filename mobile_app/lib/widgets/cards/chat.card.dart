import 'package:flutter/material.dart';
import 'package:mobile_app/widgets/cards/primary-card.ui.dart';

class ChatCard extends StatelessWidget {
  final String title;

  ChatCard({this.title});

  @override
  Widget build(BuildContext context) {
    return PrimaryCard(
      child: Row(
        children: [],
      ),
    );
  }
}
