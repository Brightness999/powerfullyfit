import 'package:mobile_app/entities/program.entity.dart';
import 'package:mobile_app/repositories/backend.proxy.dart';

class ProgramRepository {
  static String segment = '/program/';

  static Stream<Program> findWProgramById(int programId) async* {
    yield Program.fromJson(await BackendProxy.get(
        ProgramRepository.segment + programId.toString()));
  }
}
