const awards = [
  {
    _id: 1,
    date: "Jan 2018 - Shield Award",
    description: "“Received the Shield Award in 2018 from SST Public Rashidabad for securing the second position at the provincial level in the singing competition. Honored to be recognized for my musical talents and achievements”",
    awardingInstitutionName: "- SST Public School",
    credentialUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhbsUHOT8wLMVgCVdVx2f5_rimhtxXVr8p9HQVCX4H3igrbvemL09sMSfksQnoYmShmLb8uX8rBh63ZljU5d7MLz-hxkqYci5sClDTqms-k_eIR7dHi7d-HV7aoRRxVzH_skmJb7DDTCgVlILo4Mh4D7P9YgTvFzOmlsA64b9j_Ogx-pYdYoDqvcchfB47-/s1600/PicsArt_10-14-07.58.34.jpg",
  },
  {
    _id: 2,
    date: "Dec 2021 - Best Singer of the Year",
    description: "“Honored with the prestigious Best Singer Award for the academic year 2020-21 at Cadet College Larkana, celebrating my exceptional achievements in the singing competition”",
    awardingInstitutionName: "- Cadet College Larkana",
    credentialUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhy0cwRTmZIIOzqMwbkeiZcvJtQV6j_75pXLK56fem0D7vwSC6_vDXlrffy2K5Bpsp0bLEg2GlSMv6zdhx2Tl-te8eqBpMiOJ_YmJHOVYAueov0_1Lyt_anOX0_z_BP3x_Y59qkABS4ZUJNPU4hVWfjWA_wEBSsJk1_HaoxfFBIGUaUqHWs8vuRToYF0Yse/s1600/Best%20Singer%20of%20the%20Year%202020-21.jpg",
  },
];

export default awards;

const awardMap = new Map();

function setAward(key, value) {
  awardMap.set(key, value);
}

// Manually set awards in the awardMap using the setAward function
setAward(1, {
  date: "Jan 2018 - Shield Award",
  description: "“Received the Shield Award in 2018 from SST Public Rashidabad for securing the second position at the provincial level in the singing competition. Honored to be recognized for my musical talents and achievements”",
  awardingInstitutionName: "- SST Public School",
  credentialUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhbsUHOT8wLMVgCVdVx2f5_rimhtxXVr8p9HQVCX4H3igrbvemL09sMSfksQnoYmShmLb8uX8rBh63ZljU5d7MLz-hxkqYci5sClDTqms-k_eIR7dHi7d-HV7aoRRxVzH_skmJb7DDTCgVlILo4Mh4D7P9YgTvFzOmlsA64b9j_Ogx-pYdYoDqvcchfB47-/s1600/PicsArt_10-14-07.58.34.jpg",
});

setAward(2, {
  date: "Dec 2021 - Best Singer of the Year",
  description: "“Honored with the prestigious Best Singer Award for the academic year 2020-21 at Cadet College Larkana, celebrating my exceptional achievements in the singing competition”",
  awardingInstitutionName: "- Cadet College Larkana",
  credentialUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhy0cwRTmZIIOzqMwbkeiZcvJtQV6j_75pXLK56fem0D7vwSC6_vDXlrffy2K5Bpsp0bLEg2GlSMv6zdhx2Tl-te8eqBpMiOJ_YmJHOVYAueov0_1Lyt_anOX0_z_BP3x_Y59qkABS4ZUJNPU4hVWfjWA_wEBSsJk1_HaoxfFBIGUaUqHWs8vuRToYF0Yse/s1600/Best%20Singer%20of%20the%20Year%202020-21.jpg",
});

export { awardMap };
