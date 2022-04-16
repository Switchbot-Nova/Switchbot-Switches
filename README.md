# Switchbot-Switches
[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)

Repo containing all switches in switchbot

## Contribution Guide
To contribute to this project take a look at the `/switches` directory and open a Pull Request with suggested changes.

Switch entries are grouped under manufacturer subdirectories e.g. `/switches/gateron/blue.json`.

A good approach is to copy an existing .json file (under the appropriate name and subdirectory) and to adjust its contents (switch name, type, force, travel distance etc.)

Finally, try to have a flexible Regular Expression (field `RegEx`) value for searching the new switch so that
- It is flexible enough to avoid false negatives (both `gateronblack` and `Gateron Black` match)
- It is not too generic, because that would create match conflicts. For example having `"RegEx": "(gateron)"` would be bad as your entry could potentially be returned for every query for Gateron. If in doubt, consider doing some tests on https://regexr.com/.
- Switchbot has been updated so that it removes capital letters and spaces from user input so no need to put this in your RegEx.

## First Time Contributing

If it's your first time contributing to a GitHub project: [Click Here for a Guide](https://www.dataschool.io/how-to-contribute-on-github/)

## License
[ODC-BY 1.0](https://github.com/Switchbot-Nova/Switchbot-Switches/blob/main/LICENSE.md)
