import { useCallback, useState } from "react";
import { RoutesPath } from "./../types/paths";
import Api from "services";

interface Models {
  model: string;
  options?: {};
  pathOptions?: string;
  headerOptions?: {};
  immediatlyLoadData?: boolean;
}

interface DynamicIntegrations {
  values?: {};
  id?: string;
  refetchOptions?: null | any;
  refetchPathOptions?: string;
  generateLoading?: boolean;
  displayToast?: boolean;
  header?: {};
}

const useCRUD = ({
  model,
  options,
  pathOptions,
  headerOptions,
  immediatlyLoadData = false,
}: Models) => {
  const [loading, setLoading] = useState(immediatlyLoadData);

  const handleGet = useCallback(
    ({
      refetchOptions,
      refetchPathOptions,
      generateLoading,
      displayToast,
      header,
    }: DynamicIntegrations) => {
      if (generateLoading) setLoading(true);

      if (refetchPathOptions !== undefined || pathOptions !== undefined) {
        return Api.get(`/${model}/${refetchPathOptions || pathOptions}`, {
          params: refetchOptions || options,
          headers: header,
        })
          .catch((error) => {
            console.log(error);
          })
          .finally(() => {
            setLoading(false);
          });
      } else {
        return Api.get(`/${model}`, {
          params: refetchOptions || options,
          headers: header
        })
          .catch((error) => {
            console.log(error);
          })
          .finally(() => {
            setLoading(false);
          });
      }
    },
    [model, pathOptions]
  );

  const handleCreate = useCallback(
    ({
      values,
      refetchOptions,
      refetchPathOptions,
      generateLoading,
      displayToast,
      header,
    }: DynamicIntegrations) => {
      if (generateLoading) setLoading(true);

      return Api.post(`/${model}`, values, {
        params: refetchOptions || options,
      })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    },
    [model, pathOptions]
  );

  const handleUpdate = useCallback(
    ({
      values,
      id,
      refetchOptions,
      refetchPathOptions,
      generateLoading,
      displayToast,
      header,
    }: DynamicIntegrations) => {
      if (generateLoading) setLoading(true);

      return Api.patch(
        `/${model}/${id}${refetchPathOptions || pathOptions}`,
        values,
        { params: refetchOptions || options }
      )
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    },
    [model, pathOptions]
  );

  return {
    setLoading,
    loading,
    handleGet,
    handleCreate,
    handleUpdate,
  };
};

export default useCRUD;
