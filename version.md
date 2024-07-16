## Version : About
In order to protect the semantic versioning mentality, we thought that it would be more accurate to proceed with a
certain mentality in version upgrades. For this reason, we created a release algorithm. Detailed information about
this release algorithm is given below.

- `MAIN` . `UPDATE` . `PATCH`
    - When we make a major change that is incompatible with the previous version, a version jump occurs in the **"MAIN"** part. (**2**.0.0)
    - When we make an update / change compatible with the previous version, a version jump occurs in the **"UPDATE"** section. (2.**1**.0)
    - When we make / apply a bug fix compatible with the previous version, a version jump occurs in the **"PATCH"** section. (2.1.**1**)

- `DEV` , `PRE` , `STABLE`
    - It is added to the end of the versions that are still under development and definitely not ready for use. (2.1.1-**dev**)
    - Tests in the development phase are completed and added to the end of the version presented to the user. (2.1.1-**pre**)
    - It is added to the end of the stable version, which is found to be suitable for use as a result of users and tests. (2.1.1-**stable**)

## Version : Release
| Product Version | Product Last Support Date         | Product Release Date              |        LTS         | Status | Stability |
|-----------------|-----------------------------------|-----------------------------------|:------------------:|:------:|:---------:|
| 8.xx.x          | 01 February 2032, Sunday 23:59    | 01 December 2031, Sunday 23:59    |        :x:         |  :x:   |    :x:    |
| 7.xx.x (LTS)    | 01 February 2033, Sunday 23:59    | 01 December 2030, Sunday 23:59    | :white_check_mark: |  :x:   |    :x:    |
| 6.xx.x          | 01 February 2030, Sunday 23:59    | 01 December 2029, Sunday 23:59    |        :x:         |  :x:   |    :x:    |
| 5.xx.x (LTS)    | 01 February 2031, Sunday 23:59    | 01 December 2028, Sunday 23:59    | :white_check_mark: |  :x:   |    :x:    |
| 4.xx.x          | 01 February 2028, Sunday 23:59    | 01 December 2027, Sunday 23:59    |        :x:         |  :x:   |    :x:    |
| 3.xx.x (LTS)    | 01 February 2029, Sunday 23:59    | 01 December 2026, Sunday 23:59    | :white_check_mark: |  :x:   |    :x:    |
| 2.xx.x          | 01 February 2026, Sunday 23:59    | 01 December 2025, Sunday 23:59    |        :x:         |  :x:   |    :x:    |
| 1.xx.x (LTS)    | 01 February 2027, Sunday 23:59    | 01 December 2024, Sunday 23:59    | :white_check_mark: |  :x:   |    :x:    |

## Version : Informations
- The support life of the versions marked as LTS is determined as 3 years.
- The support life of the versions marked as Non-LTS is determined as 1 year.
- Stable column means that the stable version of the targeted versions is released.
- It means that the versions marked in the status column are actively published.
- "Srylius" always reserves the right to change the release date of the version.
