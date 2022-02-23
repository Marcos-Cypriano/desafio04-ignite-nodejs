import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;

    try {
      const user = this.turnUserAdminUseCase.execute({ user_id });
      console.log(user);
      return response.status(202).json(user);
    } catch (Error) {
      return response.status(404).json({ error: Error.message });
    }
  }
}

export { TurnUserAdminController };
