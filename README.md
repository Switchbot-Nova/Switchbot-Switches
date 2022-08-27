# Switchbot-Switches
[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)

Repo containing all switches in switchbot

### IMPORTANT
Switchbot no longer uses RegEx so this is no longer required to be in your json file

## Contribution Guide
To contribute to this project take a look at the `/switches` directory and open a Pull Request with suggested changes.

Switch entries are grouped under manufacturer subdirectories e.g. `/switches/gateron/blue.json`.

A good approach is to copy an existing .json file (under the appropriate name and subdirectory) and to adjust its contents (switch name, type, force, travel distance etc.)

Fields to fill in:
  - Brand
  - Switch (Name)
  - Feel (Linear, Clicky, Tactile)
  - ActivationForce
  - BottomOutForce
  - ActivationPoint
  - TravelDistance
  - Image
  - Pin
  - TopHousing
  - BottomHousing
  - Stem

## First Time Contributing

If it's your first time contributing to a GitHub project: [Click Here for a Guide](https://www.dataschool.io/how-to-contribute-on-github/)

## License
[ODC-BY 1.0](https://github.com/Switchbot-Nova/Switchbot-Switches/blob/main/LICENSE.md)
