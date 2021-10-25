/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/": {
    get: {
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
  "/profile": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.profile.id"];
          created_at?: parameters["rowFilter.profile.created_at"];
          email?: parameters["rowFilter.profile.email"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["profile"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** profile */
          profile?: definitions["profile"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.profile.id"];
          created_at?: parameters["rowFilter.profile.created_at"];
          email?: parameters["rowFilter.profile.email"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.profile.id"];
          created_at?: parameters["rowFilter.profile.created_at"];
          email?: parameters["rowFilter.profile.email"];
        };
        body: {
          /** profile */
          profile?: definitions["profile"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/receipt": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.receipt.id"];
          created_at?: parameters["rowFilter.receipt.created_at"];
          name?: parameters["rowFilter.receipt.name"];
          notes?: parameters["rowFilter.receipt.notes"];
          url?: parameters["rowFilter.receipt.url"];
          price?: parameters["rowFilter.receipt.price"];
          user?: parameters["rowFilter.receipt.user"];
          type?: parameters["rowFilter.receipt.type"];
          filePath?: parameters["rowFilter.receipt.filePath"];
          file_extension?: parameters["rowFilter.receipt.file_extension"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["receipt"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** receipt */
          receipt?: definitions["receipt"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.receipt.id"];
          created_at?: parameters["rowFilter.receipt.created_at"];
          name?: parameters["rowFilter.receipt.name"];
          notes?: parameters["rowFilter.receipt.notes"];
          url?: parameters["rowFilter.receipt.url"];
          price?: parameters["rowFilter.receipt.price"];
          user?: parameters["rowFilter.receipt.user"];
          type?: parameters["rowFilter.receipt.type"];
          filePath?: parameters["rowFilter.receipt.filePath"];
          file_extension?: parameters["rowFilter.receipt.file_extension"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.receipt.id"];
          created_at?: parameters["rowFilter.receipt.created_at"];
          name?: parameters["rowFilter.receipt.name"];
          notes?: parameters["rowFilter.receipt.notes"];
          url?: parameters["rowFilter.receipt.url"];
          price?: parameters["rowFilter.receipt.price"];
          user?: parameters["rowFilter.receipt.user"];
          type?: parameters["rowFilter.receipt.type"];
          filePath?: parameters["rowFilter.receipt.filePath"];
          file_extension?: parameters["rowFilter.receipt.file_extension"];
        };
        body: {
          /** receipt */
          receipt?: definitions["receipt"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
}

export interface definitions {
  profile: {
    /**
     * Note:
     * This is a Primary Key.<pk/>
     */
    id: number;
    created_at?: string;
    email: string;
  };
  receipt: {
    /**
     * Note:
     * This is a Primary Key.<pk/>
     */
    id: number;
    created_at?: string;
    name: string;
    notes?: string;
    url?: string;
    price?: number;
    user: string;
    type: string;
    filePath?: string;
    file_extension?: string;
  };
}

export interface parameters {
  /** Preference */
  preferParams: "params=single-object";
  /** Preference */
  preferReturn: "return=representation" | "return=minimal" | "return=none";
  /** Preference */
  preferCount: "count=none";
  /** Filtering Columns */
  select: string;
  /** On Conflict */
  on_conflict: string;
  /** Ordering */
  order: string;
  /** Limiting and Pagination */
  range: string;
  /** Limiting and Pagination */
  rangeUnit: string;
  /** Limiting and Pagination */
  offset: string;
  /** Limiting and Pagination */
  limit: string;
  /** profile */
  "body.profile": definitions["profile"];
  "rowFilter.profile.id": string;
  "rowFilter.profile.created_at": string;
  "rowFilter.profile.email": string;
  /** receipt */
  "body.receipt": definitions["receipt"];
  "rowFilter.receipt.id": string;
  "rowFilter.receipt.created_at": string;
  "rowFilter.receipt.name": string;
  "rowFilter.receipt.notes": string;
  "rowFilter.receipt.url": string;
  "rowFilter.receipt.price": string;
  "rowFilter.receipt.user": string;
  "rowFilter.receipt.type": string;
  "rowFilter.receipt.filePath": string;
  "rowFilter.receipt.file_extension": string;
}

export interface operations {}

export interface external {}
