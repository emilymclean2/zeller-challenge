import { render } from "@testing-library/react";
import { RadioButtonsGroup } from "../components/RadioButtonsGroup";

describe("<RadioButtonsGroup />", () => {
	describe("render", () => {
		it("SHOULD render", () => {
			const { asFragment } = render(<RadioButtonsGroup onRadioChange={(value) => console.log(value)}></RadioButtonsGroup>);
			expect(asFragment()).toMatchInlineSnapshot(`
<DocumentFragment>
  <div
    aria-labelledby="radio-buttons-group-label"
    class="MuiFormGroup-root css-dmmspl-MuiFormGroup-root"
    role="radiogroup"
  >
    <label
      class="MuiFormControlLabel-root MuiFormControlLabel-labelPlacementEnd sc-hLQTFJ kYnvDw css-j204z7-MuiFormControlLabel-root"
    >
      <span
        class="MuiButtonBase-root MuiRadio-root MuiRadio-colorPrimary PrivateSwitchBase-root MuiRadio-root MuiRadio-colorPrimary Mui-checked MuiRadio-root MuiRadio-colorPrimary css-vqmohf-MuiButtonBase-root-MuiRadio-root"
      >
        <input
          checked=""
          class="PrivateSwitchBase-input css-1m9pwf3"
          name="radio-buttons-group"
          type="radio"
          value="Admin"
        />
        <span
          class="css-hyxlzm"
        >
          <svg
            aria-hidden="true"
            class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1hbvpl3-MuiSvgIcon-root"
            data-testid="RadioButtonUncheckedIcon"
            focusable="false"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
            />
          </svg>
          <svg
            aria-hidden="true"
            class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-11zohuh-MuiSvgIcon-root"
            data-testid="RadioButtonCheckedIcon"
            focusable="false"
            viewBox="0 0 24 24"
          >
            <path
              d="M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"
            />
          </svg>
        </span>
        <span
          class="MuiTouchRipple-root css-8je8zh-MuiTouchRipple-root"
        />
      </span>
      <span
        class="MuiTypography-root MuiTypography-body1 MuiFormControlLabel-label css-ahj2mt-MuiTypography-root"
      >
        <p
          class="sc-guDMob bwYxOv"
        >
          Admin
        </p>
      </span>
    </label>
    <label
      class="MuiFormControlLabel-root MuiFormControlLabel-labelPlacementEnd sc-hLQTFJ hrybhA css-j204z7-MuiFormControlLabel-root"
    >
      <span
        class="MuiButtonBase-root MuiRadio-root MuiRadio-colorPrimary PrivateSwitchBase-root MuiRadio-root MuiRadio-colorPrimary MuiRadio-root MuiRadio-colorPrimary css-vqmohf-MuiButtonBase-root-MuiRadio-root"
      >
        <input
          class="PrivateSwitchBase-input css-1m9pwf3"
          name="radio-buttons-group"
          type="radio"
          value="Manager"
        />
        <span
          class="css-hyxlzm"
        >
          <svg
            aria-hidden="true"
            class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1hbvpl3-MuiSvgIcon-root"
            data-testid="RadioButtonUncheckedIcon"
            focusable="false"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
            />
          </svg>
          <svg
            aria-hidden="true"
            class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1hhw7if-MuiSvgIcon-root"
            data-testid="RadioButtonCheckedIcon"
            focusable="false"
            viewBox="0 0 24 24"
          >
            <path
              d="M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"
            />
          </svg>
        </span>
        <span
          class="MuiTouchRipple-root css-8je8zh-MuiTouchRipple-root"
        />
      </span>
      <span
        class="MuiTypography-root MuiTypography-body1 MuiFormControlLabel-label css-ahj2mt-MuiTypography-root"
      >
        <p
          class="sc-guDMob bwYxOv"
        >
          Manager
        </p>
      </span>
    </label>
  </div>
</DocumentFragment>
`);
		});
	});
});
