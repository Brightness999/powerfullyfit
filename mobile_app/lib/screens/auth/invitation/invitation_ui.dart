import 'package:flutter/material.dart';
import 'package:mobile_app/models/invitation.entity.dart';
import 'package:mobile_app/screens/auth/invitation/invitation_bloc.dart';
import 'package:mobile_app/screens/auth/invitation/invitation_events.dart';
import 'package:mobile_app/widgets/buttons/primary_button.dart';
import 'package:mobile_app/widgets/fields/text_field.dart';

class InvitationScreen extends StatelessWidget {
  final InvitationBloc invitationBloc = InvitationBloc();

  @override
  Widget build(BuildContext context) {
    Invitation currentInvitation = null;

    return Center(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          AppTextField(),
          StreamBuilder<InvitationEvent>(
            stream: invitationBloc.stateStream,
            initialData: InvitationEvent.InvitationLoading,
            builder: (BuildContext context,
                AsyncSnapshot<InvitationEvent> snapshot) {
              if (snapshot.data == InvitationEvent.InvitationError)
                return Text('error');

              return PrimaryButton(
                child: Text('Accept'),
                disabled: false,
                onPressed: () {
                  invitationBloc.eventSink
                      .add(InvitationEvent.InvitationLoading);
                },
              );
            },
          )
        ],
      ),
    );
  }
}
