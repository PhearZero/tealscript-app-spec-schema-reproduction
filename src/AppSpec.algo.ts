import { Contract } from "@algorandfoundation/tealscript";

class AppSpec extends Contract {
  // Application Metadata
  metadata = new GlobalStateMap<bytes, bytes>({ maxKeys: 12 });
  workingKey = new GlobalStateKey<bytes>()
  createApplication(): void {
    assert(this.txn.sender === globals.creatorAddress);
    this.metadata.set("name", "AppSpec");
    this.metadata.set("description", "Testing app spec output");
    this.metadata.set("author", "Michael J Feher");
    this.metadata.set("version", "v1.0.0");
    this.workingKey.set("Works")
  }
  updateApplication(): void {
    assert(this.txn.sender === globals.creatorAddress);
  }
  deleteApplication(): void {
    assert(this.txn.sender === globals.creatorAddress);
  }
}
