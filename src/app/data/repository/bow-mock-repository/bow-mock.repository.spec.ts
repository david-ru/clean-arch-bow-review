import { inject, TestBed } from "@angular/core/testing";

import { BowMockRepository } from "./bow-mock.repository";

describe("BowRepositoryMockService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BowMockRepository]
    });
  });

  it("should be created", inject(
    [BowMockRepository],
    (service: BowMockRepository) => {
      expect(service).toBeTruthy();
    }
  ));
});
