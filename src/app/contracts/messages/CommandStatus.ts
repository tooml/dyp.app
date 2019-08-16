export abstract class CommandStatus { }

export class Success extends CommandStatus { }

export class Failure extends CommandStatus {
    errorMessage: string;
}
