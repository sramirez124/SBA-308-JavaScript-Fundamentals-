// The provided course information.
const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
  };
  
  // The provided assignment group.
  const AssignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
      {
        id: 1,
        name: "Declare a Variable",
        due_at: "2023-01-25",
        points_possible: 50
      },
      {
        id: 2,
        name: "Write a Function",
        due_at: "2023-02-27",
        points_possible: 150
      },
      {
        id: 3,
        name: "Code the World",
        due_at: "3156-11-15",
        points_possible: 500
      }
    ]
  };
  
  // The provided learner submission data.
  const LearnerSubmissions = [
    {
      learner_id: 125,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-25",
        score: 47
      }
    },
    {
      learner_id: 125,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-02-12",
        score: 150
      }
    },
    {
      learner_id: 125,
      assignment_id: 3,
      submission: {
        submitted_at: "2023-01-25",
        score: 400
      }
    },
    {
      learner_id: 132,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-24",
        score: 39
      }
    },
    {
      learner_id: 132,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-03-07",
        score: 140
      }
    }
  ];
  
  function getLearnerData(course, ag, submissions) {
    // here, we would process this data to achieve the desired result.
    const result = [
      {
        id: 125,
        avg: 0.98, // (47 + 150) / (50 + 150)
        1: assignmentCheck(125, 1),//0.94, // 47 / 50
        2: assignmentCheck(125, 2) // 150 / 150
      },
      {
        id: 132,
        avg: 0.82, // (39 + 125) / (50 + 150)
        1: 0.78, // 39 / 50
        2: 0.833 // late: (140 - 15) / 150
      }
    ];
    
    function assignmentCheck(id, agID){
      let assignment = 0;
        assignment = submissions[agID - 1].submission.score / ag.assignments[agID - 1].points_possible;
      return assignment;
    }

    return result;
  }

  function checkCourseID(courseID, assignment){
    try{
        if (courseID === assignment) throw "correct";
        if (courseID !== assignment) throw "incorrect";
    } 
    catch(err){
        // console.log("Course ID is " + err);
    }
  }

  // function dueDateCheck(ag, submissions, id){
  //   for (let i = 0; i < submissions.length; i++) {
  //     console.log(submissions[0 + i].submission.submitted_at);
  //   }
  // }
  // const courseIDCheck = checkCourseID(CourseInfo.id, AssignmentGroup.course_id);
  // const dueDate = dueDateCheck(AssignmentGroup, LearnerSubmissions);
  const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
  
  const a = LearnerSubmissions[0].submission.score;
  const b = AssignmentGroup.assignments[0].points_possible;
  console.log(a / b);
  // console.log(courseIDCheck);
  console.log(result);
