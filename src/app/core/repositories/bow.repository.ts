import { Observable } from "rxjs";
import { BowModel } from "../domain/bow.model";

export abstract class BowRepository {
  abstract getAllBows(): Observable<BowModel>;
}
