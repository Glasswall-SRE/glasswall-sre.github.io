import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
//import prrData from '../../content/prr.yaml';
const React = require('react');


function MyPage(props) {

    const styles = {
        indent0 : {
            paddingLeft: "0%",
            margin: "0"
        },
        indent1 : {
            paddingLeft: "4%",
            margin: "0"
        },
        indent2 : {
            paddingLeft: "8%",
            margin: "0"
        },
        indent3 : {
            paddingLeft: "12%",
            margin: "0"
        }
    }

    const createData = (action, completed, date, signoff, evidence) => {
        return { action, completed, date, signoff, evidence };
    }

    const rows1 = [
        createData(<p style={styles.indent0}>1.1. Python</p>),
        createData(<p style={styles.indent1}>1.1.1. Adherance to the Google Style Guide for Python.</p>),
        createData(<p style={styles.indent1}>1.1.2. Use of pylint should be used as a minimum.</p>),
        createData(<p style={styles.indent0}>1.2. C#</p>),
        createData(<p style={styles.indent1}>1.2.1. Adherance to the Style Guide used within the Glasswall Cloud Team.</p>),
        createData(<p style={styles.indent1}>1.2.2. Use of SonarCloud.</p>),
        createData(<p style={styles.indent0}>1.3. Further Languages</p>),
        createData(<p style={styles.indent1}>1.3.1. Use of any further languages must be on the Glasswall SRE Tech Radar. The langauge must have an approved quality gate and standards.</p>),
        createData(<p style={styles.indent0}>1.4. Secrets SHOULD NOT be stored in code / source control.</p>),
        createData(<p style={styles.indent0}>1.5. Optional</p>),
        createData(<p style={styles.indent1}>1.5.1. Cyclomatic Complexity, The lower the value, the easier it is to test, read, understand. Key properties of production code. If the need of a developer that created the code is required, it is not production ready.</p>)
    ];

    
    const rows2 = [
        createData(<p style={styles.indent0}>2.1. Code Testing</p>),
        createData(<p style={styles.indent1}>2.1.1. 60% Code Coverage through Unit Testing and 80% code coverage on pull requested code.</p>),
        createData(<p style={styles.indent1}>2.1.2. Test Cases for the lambda function setup in order to test main functionality.</p>),
        createData(<p style={styles.indent0}>2.2. Capacity Testing</p>),
        createData(<p style={styles.indent1}>2.2.1. Expected capacity must be identified and data provided by capacity testing.</p>),
        createData(<p style={styles.indent1}>2.2.2. Capacity must be monitored and covered in handover.</p>),
        createData(<p style={styles.indent0}>2.3. Security Testing</p>),
        createData(<p style={styles.indent1}>2.3.1. Known / Existing flaws must be identified and blacklog items created.</p>),
        createData(<p style={styles.indent1}>2.3.2. Security tests conducted must be identified.</p>),
        createData(<p style={styles.indent1}>2.3.3. Risk Analysis must be carried out.</p>)
    ];

    const rows3 = [
        createData(<p style={styles.indent0}>3.1. All steps below must be automated:</p>),
        createData(<p style={styles.indent1}>3.1.1. Linting must be carried out in the pipeline first to eliminate errors during the build process.</p>),
        createData(<p style={styles.indent1}>3.1.2. Testing every commit (or pull request) before merging to master.</p>),
        createData(<p style={styles.indent1}>3.2.3. Executing unit tests, code checks.</p>),
        createData(<p style={styles.indent1}>3.2.4. Running integration tests with other services in a QA environment.</p>),
        createData(<p style={styles.indent1}>3.2.5. Deployment to production (master branch).</p>),
        createData(<p style={styles.indent1}>3.2.6. Rollbacking or aborting a deployment.</p>),
        createData(<p style={styles.indent0}>3.2. SRE must have the ability to launch an event to freeze an automatic deployment to production. This should be done via a switch or similar boolean mechanism.</p>),
    ];

    const rows4 = [
        createData(<p style={styles.indent0}>4.1. No cloud resource should be manually inserted. E.g IAM Policy etc. This is to avoid any issues with construction and destruction with the intrustructure. </p>),
        createData(<p style={styles.indent0}>4.2. AWS</p>),
        createData(<p style={styles.indent1}>4.2.1. Lambda</p>),
        createData(<p style={styles.indent2}>4.2.1.1. The code running from lambda must have a method of being able to log the event and context being passed into the lambda function for SRE's purpose of analysing a problem should one occour.</p>),
        createData(<p style={styles.indent2}>4.2.1.2. Logging or printing should be clear and in key 'business logic' steps in order to not clutter logs with irrelivant details and provide high level context into the issue.</p>),
        createData(<p style={styles.indent2}>4.2.1.3. The lambda should have some test cases it can run from within AWS to ensure the lambda is operational.</p>),
        createData(<p style={styles.indent1}>4.2.2. S3</p>),
        createData(<p style={styles.indent2}>4.2.2.1. Any S3 deployment packages should be made private for security purposes.</p>),
        createData(<p style={styles.indent2}>4.2.2.2. Dependencies should be installed prior to upload to S3.</p>),
        createData(<p style={styles.indent1}>4.2.3. API Gateway</p>),
        createData(<p style={styles.indent2}>4.2.3.1 Monitoring Requirements</p>),
        createData(<p style={styles.indent3}>4.2.3.1.1. Monitoring using CloudWatch is not sufficent. The tool is considered unreliable. Searching and Querying is also very limited. </p>),
        createData(<p style={styles.indent3}>4.2.3.1.2. Any customised API Gateway responses should be relevant, documented and understandable. This is also useful for the end user.</p>),
        createData(<p style={styles.indent2}>4.2.3.2. Protection Requirements TODO</p>),
        createData(<p style={styles.indent2}>4.2.3.3. Releasing Requirements TODO</p>),
        createData(<p style={styles.indent0}>The below may possibly not be used if the Serverless Framework is being used solely.</p>),
        createData(<p style={styles.indent1}>4.2.4. CodeDeploy</p>),
        createData(<p style={styles.indent2}>4.2.4.1. Monitoring of Traffic Shifting Status must be provisioned in SRE dedicated monitoring systems. This is used for AWS SAM however this may or may not be relevant for the Serverless Framework. <b>Key Principle being 0 downtime.</b></p>),
        createData(<p style={styles.indent1}>4.2.5. CodePipeline / CodeCommit</p>),
        createData(<p style={styles.indent2}>4.2.5.1. These technologies are not considered production ready. Refrain from this use.</p>),
        createData(<p style={styles.indent3}>4.2.5.1.1. The problem of CodePipeline is that you need to create a pipeline for every branch. You cannot create it easily automatically without running CloudFormation. Additionally, if a pipeline runs for two consecutive commits concurrently you get lost with the state. You cannot distinguish between the two different runs.</p>),
        createData(<p style={styles.indent3}>4.2.5.1.2. If a strong case can be put towards the usage then SRE can consider this technology.</p>)
    ];

    const rows5 = [
        createData(<p style={styles.indent0}>5.1. SLOs need to be defined by Product Owner.</p>),
        createData(<p style={styles.indent0}>5.2. Values provided for an SLO must be data driven and justified. Approval of this is subject to SRE approval. </p>),
        createData(<p style={styles.indent0}>5.3. The following values MUST be provided for:</p>),
        createData(<p style={styles.indent1}>5.3.1. Avaliability - Any HTTP Return status other than 500-599 is considered successful.</p>),
        createData(<p style={styles.indent1}>5.3.2. Latency</p>),
        createData(<p style={styles.indent2}>5.3.2.1. % of requests &lt; 400ms</p>),
        createData(<p style={styles.indent2}>5.3.2.2. % of requests &lt; 850ms</p>),
        createData(<p style={styles.indent0}>5.4. Any further SLOs must be indentified.</p>)
    ];

    const rows6 = [
        createData(<p style={styles.indent0}>6.1. Handover should consist of 2 sessions within a period of a week. To allow for SRE to understand and analyise the product. Handover week consists of:</p>),
        createData(<p style={styles.indent1}>6.1.1. Training Session</p>),
        createData(<p style={styles.indent1}>6.1.2. QA Session</p>),
        createData(<p style={styles.indent1}>6.1.3. Approval / Feedback Session</p>),
        createData(<p style={styles.indent0}>6.2. Technology that is not on the SRE Tech Radar may upon discetion require extra time to familiarise with.</p>)
    ];

    const rows7 = [
        createData(<p style={styles.indent0}>7.1. Onboarding of customers should be autonomous.</p>),
        createData(<p style={styles.indent0}>7.2. Time it takes to onboard a customer should take no longer than 5 minutes.</p>),
        createData(<p style={styles.indent0}>7.3. Customer management process must be defined and identified, documented and discussed during the handover process.</p>)
    ];


    return (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Action</TableCell>
                <TableCell align="right">Completed</TableCell>
                <TableCell align="right">Date</TableCell>
                <TableCell align="right">Sign Off</TableCell>
                <TableCell align="right">Evidence</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows1.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">{row.action}</TableCell>
                  <TableCell align="right">{row.completed}</TableCell>
                  <TableCell align="right">{row.date}</TableCell>
                  <TableCell align="right">{row.signoff}</TableCell>
                  <TableCell align="right">{row.evidence}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      );
}


export default MyPage;