const flowMSTeams = {
    name: 'OIH Test MS Teams',
    graph: {
        nodes: [
            {
                id: "checkLoggedUser",
                componentId: "636a7d757a3217786945f7f3",
                function: "getObjectsPolling",
                name: "checkLoggedUser",
                description: "Check user is logged"
            },
            {
                id: "createOAuthRequest",
                componentId: "636a7d757a3217786945f7f3",
                function: "upsertObject",
                name: "createOAuthRequest",
                description: "createOAuthRequest step"
            },
            {
                id: "createMSTeamsCall",
                componentId: "636a7d757a3217786945f7f3",
                function: "emitError",
                name: "createMSTeamsCall",
                description: "createMSTeamsCall request (emits error)"
            },
            {
                id: "sendToFront",
                componentId: "636a7d757a3217786945f7f3",
                function: "emitError",
                name: "upsertObject",
                description: "sendToFront step"
            }
        ],
        edges: [
            {
                source: "checkLoggedUser",
                target: "createOAuthRequest"
            },
            {
                source: "checkLoggedUser",
                target: "createMSTeamsCall"
            },
            {
                source: "createMSTeamsCall",
                target: "sendToFront"
            }
        ]
    },
    owners: [
      {
        id: '636a7aff3dfe20b731f37e87',
        type: 'user'
      }
    ],
    id: '636b77c9136d7eb5afd1da45'
  }



module.exports = {
    name: "OIH Test Flow",
    description: "Add description here",
    graph: {
        nodes: [
            {
                id: "step_1",
                componentId: "636a7d757a3217786945f7f3",
                function: "getObjectsPolling",
                name: "Step 1 getObjectsPolling",
                description: "getObjectsPolling call"
            },
            {
                id: "step_2",
                componentId: "636a7d757a3217786945f7f3",
                function: "upsertObject",
                name: "Step2 upsertObject",
                description: "upsertObject call"
            }
        ],
        edges: [
            {
                source: "step_1",
                target: "step_2"
            }
        ]
    },
    type: "ordinary",
    owners: [
    {
        id: "636a7b0c3dfe20b731f37e99",
        type: "user"
    }
    ],
    status: "inactive",
    cron: "",
    id: "636a7e2729d1db9e9dc54feb"
}