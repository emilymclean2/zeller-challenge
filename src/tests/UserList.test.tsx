import { render } from "@testing-library/react";
import { UserList } from "../components/UserList";
import { testUsers } from "./mockData";

describe("<UserList />", () => {
	describe("render", () => {
		it("SHOULD render", () => {
			const { asFragment } = render(<UserList users={testUsers}></UserList>);
			expect(asFragment()).toMatchInlineSnapshot(`
<DocumentFragment>
  <div
    class="sc-eDLKEg kmnvce"
  >
    <h4
      class="sc-hLQTFJ hOTxUh"
    >
      J
    </h4>
    <div
      class="sc-jTQDJr kbpIOc"
    >
      <p
        class="sc-guDMob bwYxOv"
      >
        John Smith
      </p>
      <p
        class="sc-dmyDmy xdNre"
      >
        Admin
      </p>
    </div>
  </div>
  <div
    class="sc-eDLKEg kmnvce"
  >
    <h4
      class="sc-hLQTFJ hOTxUh"
    >
      A
    </h4>
    <div
      class="sc-jTQDJr kbpIOc"
    >
      <p
        class="sc-guDMob bwYxOv"
      >
        Adam Muller
      </p>
      <p
        class="sc-dmyDmy xdNre"
      >
        Admin
      </p>
    </div>
  </div>
  <div
    class="sc-eDLKEg kmnvce"
  >
    <h4
      class="sc-hLQTFJ hOTxUh"
    >
      P
    </h4>
    <div
      class="sc-jTQDJr kbpIOc"
    >
      <p
        class="sc-guDMob bwYxOv"
      >
        Perri Smith
      </p>
      <p
        class="sc-dmyDmy xdNre"
      >
        Admin
      </p>
    </div>
  </div>
  <div
    class="sc-eDLKEg kmnvce"
  >
    <h4
      class="sc-hLQTFJ hOTxUh"
    >
      P
    </h4>
    <div
      class="sc-jTQDJr kbpIOc"
    >
      <p
        class="sc-guDMob bwYxOv"
      >
        Person's Name
      </p>
      <p
        class="sc-dmyDmy xdNre"
      >
        Manager
      </p>
    </div>
  </div>
  <div
    class="sc-eDLKEg kmnvce"
  >
    <h4
      class="sc-hLQTFJ hOTxUh"
    >
      A
    </h4>
    <div
      class="sc-jTQDJr kbpIOc"
    >
      <p
        class="sc-guDMob bwYxOv"
      >
        Another Person
      </p>
      <p
        class="sc-dmyDmy xdNre"
      >
        Manager
      </p>
    </div>
  </div>
</DocumentFragment>
`);
		});
	});
});
